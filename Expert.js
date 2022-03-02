import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Expert.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Two from "../ProductDetails/Two";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Expert = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container mb-5">
      <p className="title text-center">OUR EXPART TEAM MEMBER</p>
      <div className="dag">
        <Image src={require("../../asset/dag.png")} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{" "}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Operating team" {...a11yProps(0)} />
            <Tab label="Advisory Board" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Container>
            <Row>
              <Col lg={3} md={3} sm={6}>
                <div
                  className="benefit-div p-3 m-3 text-center "
                  style={{ backgroundColor: "#0A164B", color: "white" }}
                >
                  <p style={{ color: "#9683DE" }}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Leo
                    ipsum aliquet turpis elit elit natoque varius eget facilisi.
                    Amet rhoncus aliquet turpis elit elit natoque varius eget
                    facilisi. Amet rhoncus
                  </p>
                  <hr></hr>
                  <div className="d-flex justify-content-between ">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <div className="benefit-div p-3 m-3 text-center">
                  <img
                    src={require("../../asset/expert/e (2).png")}
                    className="exp-img"
                    alt=""
                  />
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <div className="benefit-div p-3 m-3 text-center">
                  <img
                    src={require("../../asset/expert/e (3).png")}
                    className="exp-img"
                    alt=""
                  />
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <div className="benefit-div p-3 m-3 text-center">
                  <img
                    src={require("../../asset/expert/e (1).png")}
                    className="exp-img"
                    alt=""
                  />
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <div className="benefit-div p-3 m-3 text-center">
                  <img
                    src={require("../../asset/expert/e (1).png")}
                    className="exp-img"
                    alt=""
                  />
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <div className="benefit-div p-3 m-3 text-center">
                  <img
                    src={require("../../asset/expert/e (4).png")}
                    className="exp-img"
                    alt=""
                  />
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <div className="benefit-div p-3 m-3 text-center">
                  <img
                    src={require("../../asset/expert/e (5).png")}
                    className="exp-img"
                    alt=""
                  />
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <div className="benefit-div p-3 m-3 text-center">
                  <img
                    src={require("../../asset/expert/e (6).png")}
                    className="exp-img"
                    alt=""
                  />
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6>LORA SNOW</h6>
                      <small>Co-founder & CTO</small>
                    </div>
                    <div>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_124_41)">
                          <rect
                            x="30.4597"
                            y="0.845703"
                            width="30"
                            height="30"
                            rx="15"
                            transform="rotate(90 30.4597 0.845703)"
                            fill="#9683DE"
                          />
                        </g>
                        <path
                          d="M11.3294 23.3385H8.22187V13.336H11.3294V23.3385ZM9.7747 11.9686C9.41728 11.9701 9.06744 11.8656 8.76941 11.6683C8.47138 11.471 8.23854 11.1898 8.10031 10.8601C7.96208 10.5305 7.92467 10.1673 7.99281 9.81648C8.06095 9.46561 8.23158 9.14282 8.48314 8.88891C8.73469 8.635 9.05588 8.46137 9.40609 8.38996C9.75631 8.31855 10.1198 8.35257 10.4507 8.48772C10.7816 8.62287 11.065 8.85309 11.2651 9.14927C11.4651 9.44544 11.5729 9.79429 11.5748 10.1517C11.5758 10.6312 11.387 11.0915 11.0498 11.4323C10.7125 11.7731 10.2541 11.9666 9.7747 11.9705V11.9686ZM22.9597 23.3385H19.8559V18.4684C19.8559 17.3071 19.8315 15.8198 18.2412 15.8198C16.651 15.8198 16.3794 17.0804 16.3794 18.386V23.3385H13.2756V13.336H16.2539V14.7015H16.2969C16.5948 14.1914 17.0254 13.7717 17.5429 13.487C18.0605 13.2023 18.6456 13.0634 19.2359 13.085C22.3827 13.085 22.9597 15.1548 22.9597 17.8447V23.3385Z"
                          fill="#F5F5FF"
                        />
                        <defs>
                          <filter
                            id="filter0_i_124_41"
                            x="0.459656"
                            y="0.845703"
                            width="34"
                            height="34"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="4" dy="4" />
                            <feGaussianBlur stdDeviation="3.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_124_41"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Two />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Expert;
