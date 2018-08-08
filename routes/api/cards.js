const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");
const isEmpty = require("../../validation/is-empty");

// Card model
const Card = require("../../models/Card");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validateCardInput = require("../../validation/card");
const validateCommentInput = require("../../validation/comment");

function authorize(role) {
  return function(req, res, next) {
    if (req.user.role === role) {
      next();
    } else {
      next(new Error("Unauthorized."));
    }
  };
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // rejest a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Only Jpeg or png are allowed."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// @route   GET api/card/test
// @desc    Tests card route
// @access  Public
router.post("/test", upload.single("courseImage"), (req, res) => {
  res.json(req.file);
});

// @route   GET api/card
// @desc    Get card categories route
// @access  Public
router.get("/", (req, res) => {
  Card.find()
    .sort({ date: -1 })
    .then(cards => res.json(cards))
    .catch(err => res.status(404).json({ nocardsfound: "No cards found" }));
});

// @route   GET api/cards/:id
// @desc    Get card by id
// @access  Public
router.get("/:id", (req, res) => {
  const errors = {};

  Card.findOne({ _id: req.params.id })
    .then(card => {
      if (!card) {
        errors.noCourse = "No cards found with that ID";
        res.status(404).json(errors);
      }
      res.json(card);
    })
    .catch(err =>
      res.status(404).json({ nocardsfound: "No cards found with that ID" })
    );
});

// @route   POST api/card
// @desc    Create card category
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  upload.single("courseImage"),
  (req, res) => {
    const { errors, isValid } = validateCardInput(req);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const newCategory = new Card({
      title: req.body.title,
      description: req.body.description,
      courseImage: req.file.path
    });

    newCategory.save().then(card => res.json(card));
  }
);

// @route   DELETE api/card/:id
// @desc    Delete card
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  (req, res) => {
    Card.findById(req.params.id).then(card => {
      card
        .remove()
        .then(() =>
          res.json({
            success: true
          })
        )
        .catch(err =>
          res.status(404).json({ cardnotfound: "No cartegory found" })
        );
    });
  }
);

// @route   POST api/card/lesson/:id
// @desc    Add more cards to category
// @access  Private
router.post(
  "/lesson/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  (req, res) => {
    const { errors, isValid } = validateCardInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Card.findById(req.params.id)
      .then(card => {
        const newLesson = {
          title: req.body.title,
          description: req.body.description
        };

        // Add to lessons array
        card.lessons.unshift(newLesson);

        // Save
        card.save().then(lesson => res.json(lesson));
      })
      .catch(err =>
        res.status(404).json({ categorynotfound: "No category Found" })
      );
  }
);

// @route   DELETE api/card/lesson/:id/:lesson_id
// @desc    remove lesson from category
// @access  Private
router.delete(
  "/lesson/:id/:lesson_id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  (req, res) => {
    Card.findById(req.params.id)
      .then(card => {
        // Check to see if lesson exists
        if (
          card.lessons.filter(
            lesson => lesson._id.toString() === req.params.lesson_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ lessonnotexists: "Lesson does not exist." });
        }

        // Get remove index
        const removeIndex = card.lessons
          .map(lesson => lesson._id.toString())
          .indexOf(req.params.lesson_id);
        // Splice lesson out of array
        card.lessons.splice(removeIndex, 1);

        card.save().then(card => res.json(card));
      })
      .catch(err =>
        res.status(404).json({ categorynotfound: "No category Found" })
      );
  }
);

// @route   POST api/card/like/:id
// @desc    Like course
// @access  Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Card.findById(req.params.id)
        .then(card => {
          if (
            card.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already liked this card" });
          }

          // Add user id to likes array
          card.likes.unshift({ user: req.user.id });

          card.save().then(card => res.json(card));
        })
        .catch(err => res.status(404).json({ cardnotfound: "No card found" }));
    });
  }
);

// @route   POST api/card/unlike/:id
// @desc    Unlike card
// @access  Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Card.findById(req.params.id)
        .then(card => {
          if (
            card.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: "You have not yet liked this card" });
          }

          // Get remove index
          const removeIndex = card.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          card.likes.splice(removeIndex, 1);

          // Save
          card.save().then(card => res.json(card));
        })
        .catch(err => res.status(404).json({ cardnotfound: "No card found" }));
    });
  }
);

// @route   POST api/card/comment/:id
// @desc    Add comment to Course
// @access  Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Card.findById(req.params.id)
      .then(course => {
        const newComment = {
          title: req.body.title,
          description: req.body.description,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        // Add to comments array
        course.comments.unshift(newComment);

        // Save
        course.save().then(course => res.json(course));
      })
      .catch(err =>
        res.status(404).json({ coursenotfound: "No course found" })
      );
  }
);

// @route   DELETE api/card/comment/:id/:comment_id
// @desc    Remove comment from course
// @access  Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Card.findById(req.params.id)
      .then(course => {
        // Check to see if comment exists
        if (
          course.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: "Comment does not exist" });
        }

        // Get remove index
        const removeIndex = course.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        course.comments.splice(removeIndex, 1);

        course.save().then(course => res.json(course));
      })
      .catch(err =>
        res.status(404).json({ coursenotfound: "No Course found" })
      );
  }
);

module.exports = router;
