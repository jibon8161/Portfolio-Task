import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Service from "../pages/Service";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await response.json();
        setUserData(data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(userData?.user);

  return (
    <div>
      {loader ? (
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
      ) : (
        <div>
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
                          <span>{userData?.user?.about?.name}</span>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="top-header-content">
                          <span>
                            <i className="fas fa-phone"></i>
                            {userData?.user?.about?.phoneNumber}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="top-header-content">
                          <span>
                            <i className="fas fa-map-marker-alt"></i>
                            {userData?.user?.about?.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 text-right">
                    <div className="top-header-social-links">
                      <ul className="d-flex">
                        {userData?.user?.social_handles.map((social, index) => (
                          <li
                            key={index}
                            style={{
                              borderBottom: "1px solid #769cef",
                              paddingBottom: "5px",
                            }}
                          >
                            <Link to={social.url} title={social.platform}>
                              <img
                                className=""
                                src={social.image.url}
                                alt={social.name}
                                style={{ marginBottom: "5px" }}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bottom-header-area"
              style={{
                position: isSticky ? "fixed" : "relative",
                top: isSticky ? "0" : "auto",
                left: isSticky ? "0" : "auto",
                right: isSticky ? "0" : "auto",
                zIndex: isSticky ? "1000" : "auto",
                backgroundColor:
                  isSticky && windowWidth <= 992
                    ? "transparent"
                    : "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="logo">
                      <a href="/">
                        <img src="assets/images/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12 text-right ">
                    <button
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer",
                        opacity: windowWidth <= 992 ? 1 : 0,
                        pointerEvents: windowWidth <= 992 ? "auto" : "none",
                        fontSize: windowWidth <= 576 ? "18px" : "24px",
                      }}
                      onClick={toggleMenu}
                    >
                      {isMenuOpen ? <>&#8801;</> : <>&#8801;</>}{" "}
                    </button>

                    {isMenuOpen && (
                      <div
                        style={{
                          backgroundColor: "#000000",
                          borderRadius: "8px",
                          padding: "40px",
                          marginTop: "8px",
                          textAlign: "center",
                        }}
                      >
                        <nav>
                          <ul style={{ listStyle: "none", padding: 0 }}>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#home"
                              >
                                Home
                              </HashLink>
                            </li>

                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#About"
                              >
                                About
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#Services"
                              >
                                Services
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#portfolio"
                              >
                                Projects
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#team"
                              >
                                Skills
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#testimonial"
                              >
                                Testimonial
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#Blog"
                              >
                                Professional Journey
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#price"
                              >
                                Price
                              </HashLink>
                            </li>
                            <li>
                              <HashLink
                                style={{
                                  textDecoration: "none",
                                  color: "#ffffff",
                                }}
                                smooth
                                to="#Contact"
                              >
                                Contact
                              </HashLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    )}

                    <div className="header-search">
                      <span className="search-btn">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                    <div className="main-menu">
                      <nav>
                        <ul>
                          <li>
                            <HashLink className="active" smooth to="#home">
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
                              Projects
                            </HashLink>
                          </li>
                          <li>
                            <HashLink smooth to="#team">
                              Skills
                            </HashLink>
                          </li>
                          <li>
                            <HashLink smooth to="#testimonial">
                              Testimonial
                            </HashLink>
                          </li>
                          <li>
                            <HashLink smooth to="#Blog">
                              Professional Journey
                            </HashLink>
                          </li>
                          <li>
                            <HashLink smooth to="#price">
                              Price
                            </HashLink>
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
                        {userData?.user?.about?.title} <br />
                        {userData?.user?.about?.exp_year} Years of Experience
                      </p>
                      <h1 className="hero-heading">
                        {" "}
                        {userData?.user?.about?.quote}
                      </h1>
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
                        {userData?.user?.about?.title} <br />
                        {userData?.user?.about?.exp_year} Years of Experience
                      </p>
                      <h1 className="hero-heading">
                        {" "}
                        {userData?.user?.about?.quote}
                      </h1>
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
                        {userData?.user?.about?.title} <br />
                        {userData?.user?.about?.exp_year} Years of Experience
                      </p>
                      <h1 className="hero-heading">
                        {" "}
                        {userData?.user?.about?.quote}
                      </h1>
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
                    src={userData?.user?.about?.avatar?.url}
                    alt=""
                    className="about-img-1 p-5"
                  />
                </div>
                <div className="col-lg-5 offset-lg-7">
                  <div className="about-us-content">
                    <div className="section-title about-us-title">
                      <p className="section-para">
                        <span></span>About Me
                      </p>
                      <h1> {userData?.user?.about?.subTitle}</h1>
                    </div>
                    <div className="about-us-text">
                      <span>A</span>
                      <p>{userData?.user?.about?.description}</p>
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
                    <HashLink to="#Contact" className="btn about-btn">
                      Contact Me <i className="fa fa-arrow-right"></i>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* about us section start */}

          {/* services section start */}

          <section
            className="service-area service-bg pt-140 pb-140"
            id="Services"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center pb-80">
                  <div className="section-title service-title">
                    <span>
                      <img src="assets/images/service-text.png" alt="" />
                    </span>
                    <p className="section-para">
                      <span></span>About Me
                    </p>
                    <h1>{userData?.user?.about?.subTitle}</h1>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row pb-30">
                  {userData?.user?.services.map((service, index) => (
                    <div className="col-lg-6 mb-4" key={index}>
                      <div className="single-service-box">
                        <div className="single-service-icon-box ">
                          <img src={service?.image.url} alt="" />
                        </div>
                        <div className="service-box-content">
                          <h3>{service?.name}</h3>
                          <h3>Charge: {service?.charge}</h3>
                          <p>{service?.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      <span></span>Portfolio
                    </p>
                    <h1>
                      <span className="text-info">
                        {" "}
                        {userData?.user?.about?.some_total}
                      </span>{" "}
                      projects completed! 🚀 Excited to share a glimpse of a few
                      of them!
                    </h1>
                  </div>
                </div>
                <div className="col-lg-7 text-right">
                  <div className="portfolio-btn-area">
                    <HashLink to="#portfolio" className="btn portfolio-btn">
                      View more <i className="fa fa-arrow-right"></i>
                    </HashLink>
                    <HashLink to="#Contact" className="portfolio-btn-2">
                      Let’s Talk <i className="fa fa-arrow-right"></i>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid text-center">
              <div class="row justify-content-center">
                {userData?.user?.projects
                  .sort((a, b) => a.sequence - b.sequence)
                  .map((project, index, array) => (
                    <div
                      class={`col-lg-${
                        index === array.length - 1 ? "6" : index < 2 ? "6" : "3"
                      } mb-4`}
                      key={index}
                    >
                      <div class="single-portfolio-item shadow">
                        <img src={project?.image?.url} alt="" />
                        <div class="portfolio-overlay-content">
                          <h2>{project.title}</h2>
                          <p>
                            <span className="mr-2"> Technologies Used:</span>
                            {project?.techStack.map((tech, index) => (
                              <span className="text-primary" key={index}>
                                {tech}
                                {index !== project?.techStack?.length - 1 &&
                                  ", "}
                              </span>
                            ))}
                          </p>
                          <p>Github URL : {project.githuburl}</p>
                          <p>Live URL : {project.liveurl}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      I denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                    </p>
                    <HashLink to="#Contact" className="btn cta-btn">
                      meet with Me <i className="fa fa-arrow-right"></i>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!--======  CTA PART End ======--> */}

          {/* <!--======  Skills PART START ======--> */}

          <section className="team-area pt-140 pb-140" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center pb-80">
                  <div className="section-title team-title">
                    <p className="section-para">
                      <span></span>Skills
                    </p>
                    <h1>Discover My Expertise and Proficiency</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Slider {...teamSettings}>
                    {userData?.user?.skills.map((skill, index) => (
                      <div key={index} className="single-team-area">
                        <div className="single-team-img text-center ml-3">
                          <img
                            className="w-50% img-fluid"
                            src={skill.image.url}
                            alt={skill.name}
                          />
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
                          <h4>{skill.name}</h4>
                          <h4>{skill.percentage}%</h4>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          {/* <!--======  Skill PART End ======--> */}

          {/* <!--======  VIDEO PART START ======--> */}

          {userData?.user?.youtube.map((video, index) => (
            <section className="video-area vdeo-bg" key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="video-icon-area">
                      <Link
                        to={`https://www.youtube.com/watch?v=${video.embedId}`}
                        className="video-icon video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-content">
                <h1>{video.title}</h1>
                <p>{video.description}</p>
                <Link to={video.learnMoreLink} className="video-read-more">
                  Learn More <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </section>
          ))}

          {/* <!--======  VIDEO PART END ======--> */}

          {/* <!--======  PROJECTS PART START ======--> */}

          <section className="project-counter-area">
            <div className="container">
              <div className="row pb-80">
                <div className="col-lg-6">
                  <div className="section-title project-title">
                    <p className="section-para">
                      <span></span>Testimonials
                    </p>
                    <h1>My Solo Expedition of Success</h1>
                  </div>
                </div>
                <div className="col-lg-6 text-right">
                  <Link to="#" className="btn counter-btn">
                    get started <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="counter-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="counter-text">
                    <h1 className="count">
                      {" "}
                      {userData?.user?.about?.some_total}{" "}
                    </h1>
                    <p>Project complete</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="counter-icon">
                    <i className="fas fa-life-ring"></i>
                  </div>
                  <div className="counter-text">
                    <h1 className="count">8563</h1>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="counter-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="counter-text">
                    <h1 className="count">963</h1>
                    <p>Awards won</p>
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
                  <img
                    className="w-full mt-100 p-3"
                    src={userData?.user?.testimonials[0]?.image?.url}
                    alt=""
                  />
                </div>
                <div className="col-lg-7">
                  <Slider
                    {...testimonialSettings}
                    className="testimonial-carousel-active"
                  >
                    {userData?.user?.testimonials.map((testimonial, index) => (
                      <div className="single-testimonial-content" key={index}>
                        <span className="testimonial-quote">
                          <i className="fa fa-quote-right"></i>
                        </span>
                        <p>{testimonial.review}</p>
                        <div className="autohor-details">
                          <img
                            src={testimonial.image.url}
                            alt=""
                            className="author-img"
                          />
                          <h5 className="author-name">
                            {testimonial.name}{" "}
                            <span>{testimonial.position}</span>
                          </h5>
                        </div>
                      </div>
                    ))}
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
                      <span></span> pricing
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

          {/* <!--======  Professional Journey ======--> */}

          <section className="blog-area pb-140" id="Blog">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 pb-80">
                  <div className="section-title blog-title">
                    <p className="section-para">
                      <span></span>Professional Journey
                    </p>
                    <h1>Highlights of Career Milestones</h1>
                  </div>
                </div>
                <div className="col-lg-8 text-right">
                  <HashLink smooth to="#Contact" className="btn blog-btn">
                    Contact Me <i className="fa fa-arrow-right"></i>
                  </HashLink>
                </div>
              </div>
              <div className="row">
                {userData?.user?.timeline.map((item, index) => (
                  <div
                    className={`col-lg-${
                      index === 0 || index === 5 ? "12" : "6"
                    } ${index === 1 ? "h-100" : ""} mb-4`}
                    key={index}
                  >
                    <div className="single-blog-area h-100">
                      <div className="single-blog-img mb-5"></div>
                      <div className="single-blog-content d-flex flex-column">
                        <p className="mb-3">Job Title: {item?.jobTitle}</p>
                        <p className="mb-auto">
                          Company Name: {item?.company_name}
                        </p>
                        <p className="mb-3">
                          Job Location: {item?.jobLocation}
                        </p>
                        <p className="mb-1">
                          <i className="far fa-calendar-alt">
                            Start Date: {item?.startDate}
                          </i>{" "}
                        </p>
                        <p className="mb-3">
                          <i className="far fa-calendar-alt">
                            End Date: {item?.endDate}
                          </i>{" "}
                        </p>
                        <p>Job Responsibilities:</p>
                        <ol>
                          {item.bulletPoints.map((point, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>
                              {index + 1}. {point}
                            </li>
                          ))}
                        </ol>
                        <p className="mb-0 styled-para">
                          Summary : {item.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* <!--======  Professional Journey ======--> */}

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
                      <span></span>Message Me
                    </p>
                    <h1>Don't Hesitate To Contact</h1>
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
                      <i className="fa fa-arrow-right"></i>
                      {userData?.user?.about?.phoneNumber}
                    </span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-address-area">
                    <span>
                      <i className="fa fa-arrow-right"></i>
                      {userData?.user?.email}
                    </span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-address-area">
                    <span>
                      <i className="fa fa-arrow-right"></i>{" "}
                      {userData?.user?.about?.address}
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
                      {userData?.user?.social_handles.map((social, index) => (
                        <li key={index}>
                          <Link
                            className="p-2"
                            to={social.link}
                            title={social.platform}
                          >
                            <img className="" src={social?.image?.url} alt="" />
                          </Link>
                        </li>
                      ))}
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
      )}
    </div>
  );
};

export default Home;
