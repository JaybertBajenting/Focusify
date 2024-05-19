"use client";
import Navbar from "../components/ui/Navbar";
import { Logo } from "../components/ui/Navbar";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-[1920px] pl-[50px] pr-[50px] mx-auto">
      <Navbar />
      <div className="space-y-[50px] mt-[100px]">
        <h1 className="text-center font-bold text-[32px]">
          About <span className="text-pinkish">Us</span>
        </h1>
        <h1 className="font-bold text-center text-[24px]">
          Welcome to <span className="text-skyblue">Focusify</span> - Your Study
          Companion!
        </h1>
        <p className="font-bold text-center">
          At <span className="text-skyblue">Focusify,</span> we believe that
          every student deserves a tool that empowers them to make the most{" "}
          <br /> out of their study sessions. Our mission is to enhance the
          study experience by providing a user- <br />
          friendly and effective study tool that caters to the unique needs of
          students.
        </p>
      </div>

      <div className="mt-[250px] ml-[100px] mr-[100px] flex justify-between">
        <div className="w-[550px] h-[200px] space-y-[15px]">
          <h1 className="text-center text-pinkish text-[20px] font-bold">
            Our Vision
          </h1>
          <p className="text-[18px]">
            We envisioned a world where students can effortlessly manage <br />
            their study time, stay focused, and create an ideal study <br />
            environment that suits their individual preferences. Focusify is{" "}
            <br />
            more than just an app; it's a commitment to optimizing study <br />
            sessions and fostering productive learning atmosphere.
          </p>
        </div>

        <div className="h-[400px] w-[1px] border-[1px] border-gray-100"></div>

        <div className="w-[550px] h-[200px] space-y-[15px]">
          <h1 className="text-center text-pinkish text-[20px] font-bold">
            Our Commitment
          </h1>
          <p className="text-[18px]">
            User-Centric Design: Focusify is designed with you in mind. We{" "}
            <br /> prioritized user experience and strive to create an intuitive
            and <br /> easy-to-use tool that enhances your study routine
          </p>

          <p className="text-[18px]">
            Continous Improvement: We are committed to continuously <br />{" "}
            improving and updating Focusify to meet the evolving needs of <br />{" "}
            students. Your feedback is invaluable in shaping the future of our{" "}
            <br /> app.{" "}
          </p>

          <p className="text-[18px]">
            Empowering Students: Focusify is not just a tool; it's a <br />
            companion that empowers students to take control of their study{" "}
            <br />
            sessions, stay organized, and achieve their academic goals.
          </p>
        </div>
      </div>
      <h1 className="mt-[100px] text-[32px] font-bold text-center">
        What Sets Us Apart
      </h1>

      <div className="flex justify-between ml-[75px] mr-[75px]">
        <div className="space-y-[15px]  w-[600px] h-[300px] mt-[100px]">
          <h1 className="font-bold  text-[20px]">
            Customizable Timers for Enhanced Focus
          </h1>
          <p className="text-[18px]">
            Focusify stands out with its customizable timers, allowing users{" "}
            <br /> to tailor their study sessions based on personal preferences.
            We <br /> understand that effective study sessions require a balance
            of <br />
            focus and breaks, and our timers are designed to accomodate <br />{" "}
            those needs seamlessly.
          </p>
        </div>
        <div className="space-y-[15px]  w-[600px] h-[300px] mt-[100px]">
          <h1 className="font-bold  text-[20px]">
            Integrated Music for a Conductive Study Environment
          </h1>
          <p className="text-[18px]">
            Our app integrates a music feature powered by YouTube, <br />
            providing students with the ability to listen to their favorite
            tunes <br />
            or background music while studying. We recognize the impact of{" "}
            <br />
            a conductive study environment on productivity, and our music <br />{" "}
            feature is here to elevate your study sessions.
          </p>
        </div>
      </div>

      <div className="ml-[75px] mr-[75px] flex justify-between mt-[150px]">
        <div className="w-[600px] h-[400px]  space-y-[45px]">
          <h1 className="font-bold text-[24px]">Get in Touch</h1>
          <p className="text-[18px]">
            We'd love to hear form you!. If you have any questions, suggestions,
            or feedback, please dont hesitate to contact us or connect with us
            on social media.
          </p>
          <p className="text-[18px]">
            Thank you for choosing Focusify to optimize your study sessions.
            Together, let's unlock your full potential!
          </p>

          <p className="text-[18px]">
            Feel free to customize the content based on your brand voice and any
            specific details you want to highlight about your team or company.
          </p>
          <hr />
        </div>
        <div className="pl-[125px]">
          <img
            src="/images/pic7.png"
            alt="Picture Get in Touch"
            className="hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-[200px] flex justify-center">
        <Logo />
      </div>

      <div className="mt-[100px] mb-[50px]">
        <hr />
      </div>

      <div className="flex justify-between mb-[50px]">
        <div className="space-x-10">
          <FontAwesomeIcon icon={faCopyright} size="lg" /> 2024 Focusify. All
          rights reserved
        </div>
        <div className="space-x-20">
          <Link href="#">Contact Us</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
