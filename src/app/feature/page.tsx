"use client";

import Navbar from "../components/ui/Navbar";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faClock } from "@fortawesome/free-regular-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  return (
    <div className="max-w-[1920px] pl-[50px] pr-[50px] mx-[auto]">
      <Navbar />

      <h1 className="font-bold text-center mt-[100px] text-[24px] mb-[50px]">
        Features
      </h1>

      <div className="flex justify-center space-x-28">
        <div className="bg-skyblue w-[400px] h-[300px] rounded-md">
          <div className="pl-[15px] pr-[15px] pt-[10px]">
            <div className="flex justify-between">
              <div></div>
              <FontAwesomeIcon icon={faHourglass} size="2xl" />
            </div>
            <h1 className="font-bold mb-[10px]">Customizable Timers:</h1>
            <ul className="list-disc pl-[15px] space-y-5">
              <li>
                Tailor your study sessions with <br />
                customizable timers to suit your focus <br /> intervals and
                breaks
              </li>
              <li>
                Image or icon representing timer <br /> customization.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-skyblue w-[400px] h-[300px] rounded-md">
          <div className="pl-[15px] pr-[15px] pt-[10px]">
            <div className="flex justify-between">
              <div></div>
              <FontAwesomeIcon icon={faCirclePlay} size="2xl" />
            </div>
            <h1 className="font-bold mb-[10px]">Integrated Music:</h1>
            <ul className="list-disc pl-[15px]">
              <li>
                Enhance your study environment with integrated music powered by
                Youtube.
                <br /> Choose from a variety of genres to boost concentration.
              </li>
              <li>
                Screenshot or illustration showing the music interface within
                the app
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[100px]"></div>

      <div className="flex justify-center space-x-28">
        <div className="bg-skyblue w-[400px] h-[300px] rounded-md">
          <div className="pl-[15px] pr-[15px] pt-[10px]">
            <div className="flex justify-between">
              <div></div>
              <FontAwesomeIcon icon={faClock} size="2xl" />
            </div>
            <h1 className="font-bold mb-[10px]">Study Session Management: </h1>
            <ul className="list-disc pl-[15px] space-y-5">
              <li>
                Enhance your productivity with <br />
                comprehensive study session management features. Seamlessly
                initiate, pause, resume and conclude study sessions directly
                within the app.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-skyblue w-[400px] h-[300px] rounded-md">
          <div className="pl-[15px] pr-[15px] pt-[10px]">
            <div className="flex justify-between">
              <div></div>
              <FontAwesomeIcon icon={faDisplay} size="2xl" />
            </div>
            <h1 className="font-bold mb-[10px]">Custom Backgrounds: </h1>
            <ul className="list-disc pl-[15px] space-y-5">
              <li>
                Personalize your study environment. Choose <br />
                from a selection of custom backgrounds to create a workspace
                that suits your style.
              </li>
              <li>Visual: Thumbnail grid of background options.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-[100px]"></div>
    </div>
  );
};

export default Feature;
