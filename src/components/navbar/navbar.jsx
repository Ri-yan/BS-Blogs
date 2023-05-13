import React from "react";

export const Navbar = () => {
  return (
    <nav class="nav navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
      <div class="container p-0">
        <a href="/"style={{"fontSize":"20px","fontVariantCaps":"all-small-caps",textDecoration:"none",color:"blue"}}>
          <span class="title navbar-brand" 
          style={{
fontFamily:"Roboto, sans-serif",
fontSize:"x-large",
fontVariantCaps:"petite-caps",
fontWeight:"bolder",
color:"rgb(13, 110, 253)"
          }}>BS Blogs</span>
        </a>
        <button
          aria-controls="responsive-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          class="navbar-toggler collapsed"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="responsive-navbar-nav">
          <div class="me-auto navbar-nav"></div>
          <div class="navbar-nav">
            {/* <a
              href="#Home"
              data-rr-ui-event-key="#Home"
              class="me-lg-4 fs-6 nav-link"
            >
              Home
            </a>
            <a
              href="#Service"
              data-rr-ui-event-key="#Service"
              class="me-lg-4 fs-6 nav-link"
            >
              Services
            </a>
            <a
              href="#Features"
              data-rr-ui-event-key="#Features"
              class="me-lg-4 fs-6 nav-link"
            >
              Features
            </a> */}
            <a
              href="https://bloodsugar-diary.web.app/"
              data-rr-ui-event-key="https://bloodsugar-diary.web.app/"
              class="me-lg-4 fs-6 nav-link"
            >
              BS Diary ➝
            </a>
            {/* <a class="me-lg-4 " href="/welcome">
              <button type="button" class="fs-6 btn btn-primary">
                Login
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
