import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Service from "../pages/Service";

const Home = () => {
  const teamMembers = [
    {
      name: "Joseph M. Fondren",
      role: "Apps designer",
      imgSrc: "assets/images/team/1.png",
    },
    {
      name: "Pauline R. Stapleton",
      role: "Web developer",
      imgSrc: "assets/images/team/2.png",
    },
    {
      name: "Robin A. Santiago",
      role: "Apps designer",
      imgSrc: "assets/images/team/3.png",
    },
    {
      name: "Pauline R. Stapleton",
      role: "Web developer",
      imgSrc: "assets/images/team/2.png",
    },
    {
      name: "Pauline R. Stapleton",
      role: "Web developer",
      imgSrc: "assets/images/team/2.png",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const teamSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object" id="object_one"></div>
            <div className="object" id="object_two"></div>
            <div className="object" id="object_three"></div>
            <div className="object" id="object_four"></div>
          </div>
        </div>
      </div>

      {/* <!--======  OFFCANVAS-SEARCH PART START ======--> */}

      <div className="offcanvas-search-area">
        <form action="#">
          <input type="text" placeholder="search" />
          <span className="close-bar">
            <i className="fas fa-times"></i>
          </span>
        </form>
      </div>

      {/* <!--======  HEADER PART START ======--> */}

      <header id="home">
        <div className="top-header-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="top-header-content">
                      <span>
                        <i className="fas fa-phone"></i>+012 (345) 67899
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="top-header-content">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>63 Plabon Road,
                        USA
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="top-header-content">
                      <span>
                        <i className="far fa-clock"></i>Sun - Friday : 10 am -
                        08 pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right border">
                <div className="top-header-social-links">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <Link to="index.html">
                    <img src="assets/images/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 text-right">
                <div className="mobile-menu-wrap"></div>
                <div className="header-search">
                  <span className="search-btn">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <div className="main-menu">
                  <nav>
                    <ul id="mobile-menu">
                      <li className="current">
                        <HashLink smooth to="#home">
                          Home
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#About">
                          About
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#Services">
                          Services
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#portfolio">
                          portfolio
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#team">
                          team
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#price">
                          price
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#Blog">
                          Blog
                        </HashLink>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html">Latest Blog</Link>
                          </li>
                          <li>
                            <Link to="blog-details.html">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <HashLink smooth to="#Contact">
                          Contact
                        </HashLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Slider {...settings}>
        <div
          className="single-hero-area hero-bg-1 bg_cover"
          data-scroll-area="true"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-area-content">
                  <p className="hero-para">
                    Start New Business <br />
                    With Our New Experience and
                  </p>
                  <h1 className="hero-heading">Creative Minds</h1>
                  <div className="hero-area-menu">
                    <ul>
                      <li>
                        <Link to="#">Design</Link>
                      </li>
                      <li>
                        <Link to="#">Marketing</Link>
                      </li>
                      <li>
                        <Link to="#">Development</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="btn hero-btn">
                    get Started <i className="fa fa-arrow-right"></i>
                  </Link>
                  <Link
                    to="https://www.youtube.com/watch?v=iogabydg2y0"
                    className="video-btn video-popup"
                  >
                    <i className="fa fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scrolli">
            <HashLink smooth to="#s">
              <span className="fa fa-arrow-down"></span>
            </HashLink>
          </div>
        </div>

        <div
          className="single-hero-area hero-bg-2 bg_cover"
          data-scroll-area="true"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-area-content">
                  <p className="hero-para">
                    Start New Business <br />
                    With Our New Experience and
                  </p>
                  <h1 className="hero-heading">Creative Minds</h1>
                  <div className="hero-area-menu">
                    <ul>
                      <li>
                        <Link to="#">Design</Link>
                      </li>
                      <li>
                        <Link to="#">Marketing</Link>
                      </li>
                      <li>
                        <Link to="#">Development</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="btn hero-btn">
                    get Started <i className="fa fa-arrow-right"></i>
                  </Link>
                  <Link to="#" className="video-btn video-popup">
                    <i className="fa fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scrolli">
            <HashLink smooth to="#s">
              <span className="fa fa-arrow-down"></span>
            </HashLink>
          </div>
        </div>

        <div
          className="single-hero-area hero-bg-3 bg_cover"
          data-scroll-area="true"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-area-content">
                  <p className="hero-para">
                    Start New Business <br />
                    With Our New Experience and
                  </p>
                  <h1 className="hero-heading">Creative Minds</h1>
                  <div className="hero-area-menu">
                    <ul>
                      <li>
                        <Link to="#">Design</Link>
                      </li>
                      <li>
                        <Link to="#">Marketing</Link>
                      </li>
                      <li>
                        <Link to="#">Development</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="btn hero-btn">
                    get Started <i className="fa fa-arrow-right"></i>
                  </Link>
                  <Link to="#" className="video-btn video-popup">
                    <i className="fa fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scrolli">
            <HashLink smooth to="#s">
              <span className="fa fa-arrow-down"></span>
            </HashLink>
          </div>
        </div>
      </Slider>

      {/* <!--======  SERVICE-CATEGORIES PART START ======--> */}

      <Service></Service>

      {/* about us section start */}

      <section className="about-us-area" id="About">
        <div className="container">
          <div className="row">
            <div className="about-us-img">
              <img
                src="assets/images/about-us/2.png"
                alt=""
                className="about-img-1"
              />
            </div>
            <div className="col-lg-5 offset-lg-7">
              <div className="about-us-content">
                <div className="section-title about-us-title">
                  <p className="section-para">
                    <span></span>About Us
                  </p>
                  <h1>Most Creative Agency For Your Project</h1>
                </div>
                <div className="about-us-text">
                  <span>A</span>
                  <p>
                    Avoids pleasure itself, because it is pleasure, but because
                    those who do not know how to pursue pleasure ration counter
                    consequences that are extremely painful. Nor again is anyone
                    who loves or pursues or desires to obtain pain.
                  </p>
                </div>
                <ul className="about-menu">
                  <li>
                    <Link to="#">
                      <i className="fas fa-check"></i>Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-check"></i>Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-check"></i>Graphics Arts
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-check"></i>Product Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-check"></i>User Research
                    </Link>
                  </li>
                </ul>
                <Link to="#" className="btn about-btn">
                  Contact Us <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about us section start */}

      {/* services section start */}

      <section className="service-area service-bg pt-140 pb-140" id="Services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center pb-80">
              <div className="section-title service-title">
                <span>
                  <img src="assets/images/service-text.png" alt="" />
                </span>
                <p className="section-para">
                  <span></span>About Us
                </p>
                <h1>Most Creative Agency For Your Project</h1>
              </div>
            </div>
          </div>
          <div className="row pb-30">
            <div className="col-lg-6">
              <div className="single-service-box">
                <div className="single-service-icon-box">
                  <p>01</p>
                  <i className="fas fa-bezier-curve"></i>
                </div>
                <div className="service-box-content">
                  <h3>Graphics Design</h3>
                  <p>
                    Inventore veritatis et quasi beata vitae dicta sunt
                    explicabo. Neenms ipsam voluptatem voluptas
                  </p>
                  <Link to="#" className="service-btn">
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-service-box">
                <div className="single-service-icon-box">
                  <p>02</p>
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="service-box-content">
                  <h3>Web Development</h3>
                  <p>
                    Inventore veritatis et quasi beata vitae dicta sunt
                    explicabo. Neenms ipsam voluptatem voluptas
                  </p>
                  <Link to="#" className="service-btn">
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-service-box">
                <div className="single-service-icon-box">
                  <p>03</p>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="service-box-content">
                  <h3>Data Analysis</h3>
                  <p>
                    Inventore veritatis et quasi beata vitae dicta sunt
                    explicabo. Neenms ipsam voluptatem voluptas
                  </p>
                  <Link to="#" className="service-btn">
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-service-box">
                <div className="single-service-icon-box">
                  <p>04</p>
                  <i className="fas fa-anchor"></i>
                </div>
                <div className="service-box-content">
                  <h3>Server Security</h3>
                  <p>
                    Inventore veritatis et quasi beata vitae dicta sunt
                    explicabo. Neenms ipsam voluptatem voluptas
                  </p>
                  <Link to="#" className="service-btn">
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services section end */}

      {/* portfolio section  start*/}

      <section className="portfolio-area pt-140 pb-140" id="portfolio">
        <div className="container">
          <div className="row pb-80">
            <div className="col-lg-5">
              <div className="section-title portfolio-title">
                <p className="section-para">
                  <span></span>About Us
                </p>
                <h1>Most Creative Agency For Your Project</h1>
              </div>
            </div>
            <div className="col-lg-7 text-right">
              <div className="portfolio-btn-area">
                <Link to="#" className="btn portfolio-btn">
                  View more <i className="fa fa-arrow-right"></i>
                </Link>
                <Link to="#" className="portfolio-btn-2">
                  Let’s Talk <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-portfolio-item">
                <img src="assets/images/portfolio/1.jpg" alt="" />
                <div className="portfolio-overlay-content">
                  <h2>Creative Works</h2>
                  <p>Light Illustration</p>
                  <Link
                    to="assets/images/portfolio/1.jpg"
                    className="portfolio-icon img-popup"
                  >
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-lg-6 pb-30 col-md-6">
                  <div className="single-portfolio-item">
                    <img src="assets/images/portfolio/2.jpg" alt="" />
                    <div className="portfolio-overlay-content">
                      <h2>Creative Works</h2>
                      <p>Light Illustration</p>
                      <Link
                        to="assets/images/portfolio/2.jpg"
                        className="portfolio-icon img-popup"
                      >
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pb-30 col-md-6">
                  <div className="single-portfolio-item">
                    <img src="assets/images/portfolio/3.jpg" alt="" />
                    <div className="portfolio-overlay-content">
                      <h2>Creative Works</h2>
                      <p>Light Illustration</p>
                      <Link
                        to="assets/images/portfolio/3.jpg"
                        className="portfolio-icon img-popup"
                      >
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-portfolio-item">
                    <img src="assets/images/portfolio/4.jpg" alt="" />
                    <div className="portfolio-overlay-content">
                      <h2>Creative Works</h2>
                      <p>Light Illustration</p>
                      <Link
                        to="assets/images/portfolio/4.jpg"
                        className="portfolio-icon img-popup"
                      >
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-portfolio-item">
                    <img src="assets/images/portfolio/5.jpg" alt="" />
                    <div className="portfolio-overlay-content">
                      <h2>Creative Works</h2>
                      <p>Light Illustration</p>
                      <Link
                        to="assets/images/portfolio/5.jpg"
                        className="portfolio-icon img-popup"
                      >
                        <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio section  end */}

      {/* <!--======  CTA PART START ======--> */}

      <section className="cta-area cta-bg pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-title">
                <span>
                  <img src="assets/images/cta-text.png" alt="" />
                </span>
                <h1>Have Any Creative Project</h1>
                <p>
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure
                </p>
                <Link to="#" className="btn cta-btn">
                  meet with us <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======  CTA PART End ======--> */}

      {/* <!--======  TEAM PART START ======--> */}

      <section className="team-area pt-140 pb-140" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center pb-80">
              <div className="section-title team-title">
                <p className="section-para">
                  <span></span>our team member
                </p>
                <h1>Meet Our Most Creative Minds That Are Professional</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Slider {...teamSettings}>
                {teamMembers.map((member, index) => (
                  <div key={index} className="single-team-area">
                    <div className="single-team-img text-center">
                      <img src={member.imgSrc} alt={member.name} />
                      <span className="team-icon-1">
                        <img src="assets/images/team/icon/1.png" alt="" />
                      </span>
                      <span className="team-icon-2">
                        <img src="assets/images/team/icon/2.png" alt="" />
                      </span>
                      <span className="team-icon-3">
                        <img src="assets/images/team/icon/3.png" alt="" />
                      </span>
                    </div>
                    <div className="single-team-content text-center">
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======  TEAM PART End ======--> */}

      {/* <!--======  VIDEO PART START ======--> */}

      <section className="video-area vdeo-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-icon-area">
                {/* Use appropriate React components or libraries for the video popup */}
                <Link
                  to="https://www.youtube.com/watch?v=iogabydg2y0"
                  className="video-icon video-popup"
                >
                  <i className="fa fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="video-content">
          <span>
            <img src="assets/images/video-text.png" alt="Video Text" />
          </span>
          <h1>Watch Our Latest Videos</h1>
          <p>
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the
          </p>
          <Link to="#" className="video-read-more">
            Learn More <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* <!--======  VIDEO PART END ======--> */}

      {/* <!--======  PROJECTS PART START ======--> */}

      <section className="project-counter-area">
        <div className="container">
          <div className="row pb-80">
            <div className="col-lg-6">
              <div className="section-title project-title">
                <p className="section-para">
                  <span></span>company fact
                </p>
                <h1>We Are Digital And Creative Agency</h1>
              </div>
            </div>
            <div className="col-lg-6 text-right">
              <Link to="#" className="btn counter-btn">
                get started <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="counter-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="counter-text">
                <h1 className="count">6320</h1>
                <p>Project complete</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-icon">
                <i className="fas fa-life-ring"></i>
              </div>
              <div className="counter-text">
                <h1 className="count">8563</h1>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="counter-text">
                <h1 className="count">963</h1>
                <p>Awards won</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-icon">
                <i className="fas fa-universal-access"></i>
              </div>
              <div className="counter-text">
                <h1 className="count">4975</h1>
                <p>Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======  PROJECTS PART END ======--> */}

      {/* <!--======  TESTIMONIAL PART START ======--> */}

      <section className="testimonial-area" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src="assets/images/testimonial/1.png" alt="" />
            </div>
            <div className="col-lg-7">
              <Slider
                {...testimonialSettings}
                className="testimonial-carousel-active"
              >
                <div className="single-testimonial-content">
                  <span className="testimonial-quote">
                    <i className="fa fa-quote-right"></i>
                  </span>
                  <p>
                    Avoids pleasur itself because pleas because those who do not
                    know how to pursue plesure rationally encou eque that are
                    extrem painful again is there anyone who loves pursues or
                    desires to obtain pain of itself.
                  </p>
                  <div className="autohor-details">
                    <img
                      src="assets/images/testimonial/author.png"
                      alt=""
                      className="author-img"
                    />
                    <h5 className="author-name">
                      Michele L. Racinea <span>Web Designer</span>
                    </h5>
                  </div>
                </div>
                <div className="single-testimonial-content">
                  <span className="testimonial-quote">
                    <i className="fa fa-quote-right"></i>
                  </span>
                  <p>
                    Avoids pleasur itself because pleas because those who do not
                    know how to pursue plesure rationally encou eque that are
                    extrem painful again is there anyone who loves pursues or
                    desires to obtain pain of itself.
                  </p>
                  <div className="autohor-details">
                    <img
                      src="assets/images/testimonial/author.png"
                      alt=""
                      className="author-img"
                    />
                    <h5 className="author-name">
                      Michele L. Racinea <span>Web Designer</span>
                    </h5>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======  TESTIMONIAL PART END ======--> */}

      {/* <!--======  PRICING PART START ======--> */}

      <section className="pricing-area pt-140 pb-140" id="price">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="section-title pricing-title pb-80">
                <p className="section-para">
                  <span></span>our pricing
                </p>
                <h1>Popular Pricing Plan For Creative Project</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-price-box">
                <div className="absolute-price-num">
                  <h2>
                    01 <span>basic</span>
                  </h2>
                </div>
                <img
                  src="assets/images/price-icon.png"
                  alt=""
                  className="price-icon"
                />
                <h3>
                  <span>$45.99</span> For Monthly Project Charge
                </h3>
                <p>
                  <i className="fa fa-arrow-right"></i>Web Design (UX/UI)
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Software Development
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Fashion Design (Arts)
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Web Development (php)
                </p>
                <div className="hover-pricing-text">
                  <p>
                    <i className="fa fa-arrow-right"></i>Game Design & DV
                  </p>
                  <p>
                    <i className="fa fa-arrow-right"></i>Computer Hardware
                  </p>
                </div>
                <Link to="#" className="btn price-btn">
                  make plan <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-price-box active">
                <div className="absolute-price-num">
                  <h2>
                    02 <span>smart</span>
                  </h2>
                </div>
                <img
                  src="assets/images/price-icon.png"
                  alt=""
                  className="price-icon"
                />
                <h3>
                  <span>$65.99</span> For Monthly Project Charge
                </h3>
                <p>
                  <i className="fa fa-arrow-right"></i>Web Design (UX/UI)
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Software Development
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Fashion Design (Arts)
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Web Development (php)
                </p>
                <div className="hover-pricing-text">
                  <p>
                    <i className="fa fa-arrow-right"></i>Game Design & DV
                  </p>
                  <p>
                    <i className="fa fa-arrow-right"></i>Computer Hardware
                  </p>
                </div>
                <Link to="#" className="btn price-btn">
                  make plan <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-price-box">
                <div className="absolute-price-num">
                  <h2>
                    03 <span>Premium</span>
                  </h2>
                </div>
                <img
                  src="assets/images/price-icon.png"
                  alt=""
                  className="price-icon"
                />
                <h3>
                  <span>$103.99</span> For Monthly Project Charge
                </h3>
                <p>
                  <i className="fa fa-arrow-right"></i>Web Design (UX/UI)
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Software Development
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Fashion Design (Arts)
                </p>
                <p>
                  <i className="fa fa-arrow-right"></i>Web Development (php)
                </p>
                <div className="hover-pricing-text">
                  <p>
                    <i className="fa fa-arrow-right"></i>Game Design & DV
                  </p>
                  <p>
                    <i className="fa fa-arrow-right"></i>Computer Hardware
                  </p>
                </div>
                <Link to="#" className="btn price-btn">
                  make plan <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======  PRICING PART END ======--> */}

      {/* <!--======  BLOG PART START ======--> */}

      <section className="blog-area pb-140" id="Blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 pb-80">
              <div className="section-title blog-title">
                <p className="section-para">
                  <span></span>News & blog
                </p>
                <h1>Latest Articles For New Project</h1>
              </div>
            </div>
            <div className="col-lg-8 text-right">
              <Link to="#" className="btn blog-btn">
                view all news <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-blog-area">
                <div className="single-blog-img">
                  <img src="assets/images/blog/1.jpg" alt="" />
                </div>
                <div className="single-blog-content">
                  <p>
                    <i className="far fa-calendar-alt"></i>25 Dec 2019
                  </p>
                  <p className="styled-para">
                    Inspiring Desktop Wallpap Makes November Even More Colorful
                    (2019 Edition)
                  </p>
                  <Link to="#" className="blog-read-more">
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-blog-area">
                <div className="single-blog-img">
                  <img src="assets/images/blog/2.jpg" alt="" />
                </div>
                <div className="single-blog-content">
                  <p>
                    <i className="far fa-calendar-alt"></i>25 Dec 2019
                  </p>
                  <p className="styled-para">
                    We’ve Got A Lil’ Announ To Make Rachel Andrew Is
                    SmashingMag’s New Editor
                  </p>
                  <Link to="#" className="blog-read-more">
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-blog-area">
                <div className="single-blog-img">
                  <img src="assets/images/blog/3.jpg" alt="" />
                </div>
                <div className="single-blog-content">
                  <p>
                    <i className="far fa-calendar-alt"></i>25 Dec 2019
                  </p>
                  <p className="styled-para">
                    Quick Wins For Improving Performance And Security Of Your
                    Website
                  </p>
                  <Link to="#" className="blog-read-more">
                    Read More <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======  BLOG PART END ======--> */}

      {/* <!--======  CONTACT-WITH-FOOTER PART START ======--> */}

      <section
        className="contact-with-footer-area contact-bg pt-100"
        id="Contact"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center pb-80">
              <div className="section-title contact-title">
                <span>
                  <img src="assets/images/contact-text.png" alt="" />
                </span>
                <p className="section-para">
                  <span></span>Message Us
                </p>
                <h1>Don't Hesitate To Contact With Us</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-form-area">
                <form action="#">
                  <div className="single-contact-field">
                    <input type="text" placeholder="Your Name" />
                    <span className="far fa-user"></span>
                  </div>

                  <div className="single-contact-field">
                    <input type="email" placeholder="Your email" />
                    <span className="fas fa-envelope-open-text"></span>
                  </div>

                  <div className="single-contact-field">
                    <input type="text" placeholder="Your phone" />
                    <span className="fas fa-phone"></span>
                  </div>

                  <div className="single-contact-field textarea">
                    <textarea
                      name="#"
                      id="#"
                      cols="30"
                      rows="10"
                      placeholder="Your Message"
                    ></textarea>
                    <span className="fas fa-pencil-alt"></span>
                    <Link to="#" className="btn contact-btn">
                      send message <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-address-area">
                <span>
                  <i className="fa fa-arrow-right"></i>+012 (345) 77 999
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-address-area">
                <span>
                  <i className="fa fa-arrow-right"></i>support@gmail.com
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-address-area">
                <span>
                  <i className="fa fa-arrow-right"></i>55 New Sodor Road, USA
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>&copy; 2020 Livvic. All Rights Reserved</p>
              </div>
              <div className="col-lg-6">
                <ul className="footer-links">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-behance"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--======  CONTACT-WITH-FOOTER PART START ======--> */}

      {/* <!--======  SCROLL-TO-TOP PART START ======--> */}

      <div className="scroll-to-top">
        <span id="return-to-top" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </span>
      </div>

      {/* <!--======  SCROLL-TO-TOP PART END ======--> */}
    </div>
  );
};

export default Home;
