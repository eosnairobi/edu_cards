import React, { Component } from "react";

class AsideMenu extends Component {
  render() {
    return (
      <div id="aside" class="col-md-3">
        {/* <!-- search widget --> */}
        <div class="widget search-widget">
          <form>
            <input class="input" type="text" name="search" />
            <button>
              <i class="fa fa-search" />
            </button>
          </form>
        </div>
        {/* <!-- /search widget --> */}

        {/* <!-- category widget --> */}
        <div class="widget category-widget">
          <h3>Categories</h3>
          <a class="category" href="#">
            Web <span>12</span>
          </a>
          <a class="category" href="#">
            Css <span>5</span>
          </a>
          <a class="category" href="#">
            Wordpress <span>24</span>
          </a>
          <a class="category" href="#">
            Html <span>78</span>
          </a>
          <a class="category" href="#">
            Business <span>36</span>
          </a>
        </div>
        {/* <!-- /category widget --> */}

        {/* <!-- posts widget --> */}
        <div class="widget posts-widget">
          <h3>Recents Courses</h3>

          {/* <!-- single posts --> */}
          <div class="single-post">
            <a class="single-post-img" href="blog-post.html">
              <img src="./img/post01.jpg" alt="" />
            </a>
            <a href="blog-post.html">Pro eu error molestie deserunt.</a>
            <p>
              <small>By : John Doe .18 Oct, 2017</small>
            </p>
          </div>
          {/* <!-- /single posts --> */}

          {/* <!-- single posts --> */}
          <div class="single-post">
            <a class="single-post-img" href="blog-post.html">
              <img src="./img/post02.jpg" alt="" />
            </a>
            <a href="blog-post.html">Pro eu error molestie deserunt.</a>
            <p>
              <small>By : John Doe .18 Oct, 2017</small>
            </p>
          </div>
          {/* <!-- /single posts --> */}

          {/* <!-- single posts --> */}
          <div class="single-post">
            <a class="single-post-img" href="blog-post.html">
              <img src="./img/post03.jpg" alt="" />
            </a>
            <a href="blog-post.html">Pro eu error molestie deserunt.</a>
            <p>
              <small>By : John Doe .18 Oct, 2017</small>
            </p>
          </div>
          {/* <!-- /single posts --> */}
        </div>
        {/* <!-- /posts widget --> */}

        {/* <!-- tags widget --> */}
        <div class="widget tags-widget">
          <h3>Tags</h3>
          <a class="tag" href="#">
            Web
          </a>
          <a class="tag" href="#">
            Photography
          </a>
          <a class="tag" href="#">
            Css
          </a>
          <a class="tag" href="#">
            Responsive
          </a>
          <a class="tag" href="#">
            Wordpress
          </a>
          <a class="tag" href="#">
            Html
          </a>
          <a class="tag" href="#">
            Website
          </a>
          <a class="tag" href="#">
            Business
          </a>
        </div>
        {/* <!-- /tags widget --> */}
      </div>
    );
  }
}

export default AsideMenu;
