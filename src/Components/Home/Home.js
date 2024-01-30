import React from "react";
import "./Home.css";
import profileimg from "../../Assets/my_photo.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="bg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 500"
            style={{ opacity: "1" }}
          >
            <g
              transform="translate(-30, 0)"
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Group-9" opacity="0.3">
                <g style={{ transform: "translate(0px, -12.7605px)" }}>
                  <g id="r-1">
                    <rect
                      id="Rectangle-6"
                      fill="#FFFFFF"
                      transform="translate(41.000000, 169.000000) rotate(-27.000000) translate(-41.000000, -169.000000) "
                      x="11"
                      y="139"
                      width="60"
                      height="60"
                      rx="2"
                    ></rect>
                  </g>
                </g>
                <g style={{ transform: "translate(0px, 10.0584px)" }}>
                  <g id="p-1">
                    <polygon
                      id="Polygon"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      transform="translate(139.000000, 17.500000) rotate(45.000000) translate(-139.000000, -17.500000) "
                      points="139 77 152 100 126 100"
                    ></polygon>
                  </g>
                </g>
                <g style={{ transform: "translate(0px, -27.7172px)" }}>
                  <g id="p-2">
                    <polygon
                      id="Polygon"
                      stroke="#FFFFFF"
                      transform="translate(180.000000, 446.000000) rotate(-67.000000) translate(-180.000000, -446.000000) "
                      points="180 439 188 453 172 453"
                    ></polygon>
                  </g>
                </g>
                <g style={{ transform: "translate(0px, -13.3969px)" }}>
                  <g id="c-1">
                    <circle
                      id="Oval"
                      stroke="#FFFFFF"
                      stroke-width="3"
                      fill="#FFFFFF"
                      cx="256"
                      cy="357"
                      r="10"
                    ></circle>
                  </g>
                </g>
              </g>
              <g
                id="Group-8"
                transform="translate(1219.000000, 69.000000)"
                stroke="#FFFFFF"
              >
                <g style={{ transform: "translate(0px, 0.827836px)" }}>
                  <g id="r-2">
                    <rect
                      id="Rectangle-6"
                      stroke-width="2"
                      opacity="0.3"
                      transform="translate(47.000000, 343.000000) rotate(-45.000000) translate(-47.000000, -343.000000) "
                      x="15"
                      y="311"
                      width="64"
                      height="64"
                      rx="2"
                    ></rect>
                  </g>
                </g>
                <g style={{ transform: "translate(0px, 26.6394px)" }}>
                  <g id="c-2">
                    <circle
                      id="Oval"
                      stroke-width="3"
                      fill="#FFFFFF"
                      opacity="0.4"
                      cx="155"
                      cy="13"
                      r="13"
                    ></circle>
                  </g>
                </g>
                <g style={{ transform: "translate(0px, 18.2172px)" }}>
                  <g id="c-3">
                    <circle
                      id="Oval"
                      stroke-width="2"
                      opacity="0.4"
                      cx="211"
                      cy="225"
                      r="8"
                    ></circle>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="profile">
          <svg
            className="profile-bg"
            viewBox="0 0 175 175"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="svg1"
              fill="#FF0066"
              d="M42,-13.5C50.6,13.1,51.4,42.4,34.9,56.2C18.5,70.1,-15,68.5,-37.8,51.9C-60.5,35.4,-72.5,4,-64.4,-21.8C-56.3,-47.5,-28.1,-67.6,-5.8,-65.7C16.6,-63.9,33.3,-40,42,-13.5Z"
              transform="translate(85 90)"
            />
            <path
              id="svg2"
              fill="#FF0066"
              d="M60,-14.9C68.9,8.1,61.3,41,40,56.9C18.7,72.9,-16.3,71.8,-37.7,55.4C-59,39.1,-66.7,7.4,-58.2,-14.9C-49.6,-37.3,-24.8,-50.4,0.3,-50.6C25.5,-50.7,51,-37.8,60,-14.9Z"
              transform="translate(100 100)"
              style={{ visibility: "hidden" }}
            />
            <path
              id="svg3"
              fill="#FF0066"
              d="M67.6,-23.8C76.1,4,63.4,36.9,40.6,52.7C17.7,68.6,-15.2,67.4,-34.4,52.3C-53.6,37.1,-59.1,8.1,-51.1,-19.1C-43.1,-46.3,-21.6,-71.6,4,-73C29.6,-74.3,59.2,-51.5,67.6,-23.8Z"
              transform="translate(100 100)"
              style={{ visibility: "hidden" }}
            />
          </svg>

          <div className="myimg-holder">
            <img src={profileimg} className="img-2" alt="" />
            <img src={profileimg} className="img-3" alt="" />
            <img src={profileimg} className="img-4" alt="" />
            <img src={profileimg} className="myimg" alt="" />
            <div className="social">
            <a href="https://twitter.com/raj_rawariya" target="_blank"><i className="fa-brands fa-twitter social-icon"></i></a>
            <a href="https://www.linkedin.com/in/raj-rawariya" target="_blank"><i className="fa-brands fa-linkedin  social-icon"></i></a>
            <a href="https://github.com/Raj100" target="_blank"><i class="fa-brands fa-github  social-icon"></i></a>

          </div>
          </div>
        </div>

        <div className="my-info">
          <div className="info">
            <p>
            I am a 20 year old man living in Mumbai originally from
            Adhoi, Kutch, Gujarat. I also lived in Chhatrapati Sambhaji Nagar. A
            while back before my coding career, I was a 15*7 study
            nerd. I've had the privilege to work for NIT Goa to build sites for
            Events. Other than actual coding work, I also build Electronics and
            Robotics solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
