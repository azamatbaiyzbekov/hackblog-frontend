import React from 'react';
import './AboutUs.css'


const AboutUs = () => {
    return (
<>

    <div className="wrapper">
    <div className="page-header page-header-small">
      <div className="page-header-image" data-parallax="true" >
      </div>
      <div className="content-center">
        <div className="container">
          <h1 className="title">This is our great company.</h1>
          <div className="text-center">
            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
              <i className="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <h2 className="title">Who we are?</h2>
            <h5 className="description">Established in 2019 the HackBlog is a platform, where you can write about existing and new technologies. Our goal is to let people share their ideas in the world of Tech and learn from each other.</h5>
          </div>
        </div>
        <div className="separator separator-primary"></div>
        <div className="section-story-overview">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container image-left"  />
                
                <p className="blockquote blockquote-primary">"If you want to be a writer, you must do two things above all: Read a lot and write a lot"
                  
                  <small>-Steven King</small>
                </p>
              </div>
              
              <div className="image-container"></div>
            </div>
            <div className="col-md-5">
              
              <div className="image-container image-right"></div>
              <h3>Rise or fall of blogging</h3>
              <p>Blogs exploded in popularity fast. According to Drezner and Farrell, in 1999, there were an estimated 50 blogs dotted around the internet. By 2007, a blog tracker theorized there were around seventy million. Yet, a popular question today is whether blogs still have any relevance. A quick Google search will yield suggested results, “are blogs still relevant 2016,” “are blogs still relevant 2017,” and “is blogging dead.
              </p>
              <p>
              There are 2 types of professional bloggers: people who make money through their own blog, and people who blog for a company
              </p>
              <p>Great writing isn't enough to be a great blogger. You need to know how to get people to *read* your writing. Both types of professional blogger need a similar skillset—and that skillset isn’t necessarily the one you imagine when you hear “blogger.”
              Of course, a professional blogger is going to need to be a strong writer. The blog writing is the foundation of a blog that makes money.
              But strong writing on its own is almost never enough. Great writing can never create revenue or income unless people actually read it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-team text-center">
      <div className="container">
        <h2 className="title">Reviews</h2>
        <div className="team">
          <div className="row">
            <div className="col-md-4">
              <div className="team-player">
                <img src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                <h4 className="title">Elon Mask</h4>
                <p className="category text-primary">SpaceX</p>
                <p className="description">As the founder of SpaceX, I needed a place where i can share about our new teachnology with people. HackBlog is the place, where right now i am able to do it.
                </p>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-instagram"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-facebook-square"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                <h4 className="title">Brendon Eich</h4>
                <p className="category text-primary">Javascript</p>
                <p className="description">Thanks to HackBlog, we are able to share and teach people about most recent Javascript updates. 
                </p>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <img src="https://specials-images.forbesimg.com/imageserve/5ceaa9c5142c500008f3bcce/416x416.jpg?background=000000&cropX1=937&cropX2=3594&cropY1=11&cropY2=2667" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                <h4 className="title">Sheryl Sandberg</h4>
                <p className="category text-primary">Facebook</p>
                <p className="description">We recently launched Facebook dating. Thanks to HackBlog our team of writers were able to put some great articles and reach out to masses.
                </p>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-google-plus"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-youtube"></i></a>
                <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <footer className="footer footer-default">
      <div className="container">
        <nav>
          <ul>
            
            <li>
              <a href="http://presentation.creative-tim.com">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">
                Blog
              </a>
            </li>
          </ul>
        </nav>
         <div className="copyright" id="copyright">

        </div>
      </div>
    </footer>
  
</>
    )
};





export default AboutUs;