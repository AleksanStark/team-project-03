import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import css from "./Footer.module.css";

import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedin.svg";
import AleksanVartapetyan from "../images/aleksanvartapetyan.jpeg";
import TetianaTymoshchenko from "../images/tetianatymoshchenko.jpg";
import IlonaHonchar from "../images/ilonahonchar.png";
import OlgaIarova from "../images/olgaiarova.png";
import YuliiaProkopchuk from "../images/yuliiaprokopchuk.png";
import OksanaPodolianyk from "../images/oksanapodolianyk.png";
import AnastasiaNazarova from "../images/anastasianazarova.png";
import TetianaChehrina from "../images/tetianachehrina.png";
import AndriyBilous from "../images/andriybilous.png";
import IlyaPylypchuk from "../images/ilyapylypchuk.png";
import MaksymPebryk from "../images/maksymrebryk.png";
import DmytroDiumin from "../images/dmytrodiumin.jpg";


const TeamMembers = () => {

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={css["swiper-container"]}
      >
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={AleksanVartapetyan} alt="Aleksan Vartapetyan" />
            <div className={css["swiper-info-container"]}>Aleksan Vartapetyan
              <div>
                <p className={css["swiper-info-name"]}>Team Leader
                </p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>Environment Setup
                  </li>
                  <li className={css["swiper-info-task"]}>Project Structure
                  </li>
                  <li className={css["swiper-info-task"]}>Technical Guidance
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/aleksanstark"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aleksanstark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={TetianaTymoshchenko} alt="Tetiana Tymoshchenko" />
            <div className={css["swiper-info-container"]}>Tetiana Tymoshchenko<div>
                <p className={css["swiper-info-name"]}>Scrum Master/Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                <li className={css["swiper-info-task"]}>
                    Frontend: Welcome Page
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Sign up
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Loader
                </li>
                    <li className={css["swiper-info-task"]}>
                    Backend: Google Authorization
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/tanyatymoshchenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tetianatymoshchenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={IlonaHonchar} alt="Ilona Honchar" />
            <div className={css["swiper-info-container"]}>Ilona Honchar<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Backend: User
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Backend: DataBase
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Backend: Swagger API Documentation
                    </li>
                    <li className={css["swiper-info-task"]}>
                           Server Deployment
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/ilonivna"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ilona-honchar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={OlgaIarova} alt="Olga Iarova" />
            <div className={css["swiper-info-container"]}>Olga Iarova<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Backend: Water
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Backend: Water Rate
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Backend: Month
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Backend: Today
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/olyaIarova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/olga-iarova-ab5120256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={YuliiaProkopchuk} alt="Yuliia Prokopchuk" />
            <div className={css["swiper-info-container"]}>Yuliia Prokopchuk<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Backend: Auth
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Backend: Reset password through email
                  </li>
                  </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/YuliiaPro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yuliia-prokopchuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={OksanaPodolianyk} alt="Oksana Podolianyk" />
            <div className={css["swiper-info-container"]}>Oksana Podolianyk<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Month Stats Table</li>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Daily Norma Modal
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/Podolianyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oksana-podolianyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={AnastasiaNazarova} alt="Anastasia Nazarova" />
            <div className={css["swiper-info-container"]}>Anastasia Nazarova<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Sign In
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Forgot Password Page
                  </li>
                 </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/AnastasiaNazar82"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anastasiya-nazarova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={TetianaChehrina} alt="Tetiana Chehrina" />
            <div className={css["swiper-info-container"]}>Tetiana Chehrina<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Today List Modal
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/TetianaChehrina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tetiana-chehrina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={AndriyBilous} alt="Andriy Bilous" />
            <div className={css["swiper-info-container"]}>Andriy Bilous<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Header
                  </li>
                  </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/AndriiBilous"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/andriy-bilous-082391173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={IlyaPylypchuk} alt="Ilya Pylypchuk" />
            <div className={css["swiper-info-container"]}>Ilya Pylypchuk<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Water Ratio Panel
                  </li>
                  <li className={css["swiper-info-task"]}>
                   Frontend: Days General Stats
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/pilipchu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ilya-pylypchuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
              </SwiperSlide>
              <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={MaksymPebryk} alt="Maksym Rebryk" />
            <div className={css["swiper-info-container"]}>Maksym Rebryk<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Home Page
                  </li>
                  <li className={css["swiper-info-task"]}>
                   Frontend: Daily Norma
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/MaxRebryk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/maksym-rebryk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
              </SwiperSlide>
              <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={DmytroDiumin} alt="Dmytro Diumin" /> 
            <div className={css["swiper-info-container"]}>Dmytro Diumin<div>
                <p className={css["swiper-info-name"]}>Developer</p>
                <p className={css["swiper-info-role"]}></p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Frontend: Today Water List
                  </li>
                </ul>
              </div>
              <div className={css["swiper-icon-container"]}>
                <a
                  href="https://github.com/Dmytro-Diumin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/Dmytro-Diumin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TeamMembers;