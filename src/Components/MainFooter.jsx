import React from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MainFooter = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-60 justify-around mt-5 space-y-5 md:space-y-0">
      <div className="text-center md:text-left">
        <p className="text-base font-sans">
          <span className="text-xl font-extrabold">The Agency</span> <br />
          For Frontend Design Template With Code <br />
          And Some AI Tools!
        </p>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-extrabold">Company</h2>
        <div className="flex flex-col space-y-2">
          <a href="">Projects</a>
          <a href="">Contact</a>
          <a href="">Open Source</a>
          <a href="">Blog</a>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-extrabold">Community</h2>
        <div className="flex flex-col space-y-2">
          <a href="">GitHub</a>
          <a href="">Twitter</a>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">LinkedIn</a>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-extrabold">Services</h2>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 mt-5">
          <div className="flex flex-col space-y-2">
            <a href="">UI/UX Design</a>
            <a href="">Web Development</a>
            <a href="">SEO</a>
            <a href="">React JS Services</a>
            <a href="">Node JS Services</a>
            <a href="">Next JS Services</a>
            <a href="">Backend Development</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="">Digital Marketing</a>
            <a href="">Graphic Design</a>
            <a href="">Content Writing</a>
            <a href="">Video Editing</a>
          </div>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-extrabold">Resources</h2>
        <div className="flex flex-col space-y-2">
          <a href="">Documentation</a>
          <a href="">FAQ</a>
          <a href="">Support</a>
          <a href="">License</a>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-extrabold">Legal</h2>
        <div className="flex flex-col space-y-2">
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookies</a>
          <a href="">Copyright</a>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-extrabold">Follow us</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <a href="">
              <MdFacebook className="text-2xl" />
            </a>
            <a href="">Facebook</a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <a href="">
              <AiFillTwitterCircle className="text-2xl" />
            </a>
            <a href="">Twitter</a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <a href="">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="">Instagram</a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <a href="">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;