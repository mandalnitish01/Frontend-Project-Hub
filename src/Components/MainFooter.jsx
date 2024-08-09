import React from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const MainFooter = () => {
  return (
    <div className="flex h-60 flex-row justify-around mt-5">
      <div>
        <p className="text-base font-sans">
          <span className="text-xl font-extrabold">
          The Agency</span> <br /> For Frontend Design Template With Code <br /> And
          Some AI Tools!
        </p>
      </div>
      <div>
        <div>
        <h2 className="text-xl font-extrabold">Company</h2>
        </div>
        <div className="flex  flex-col">
        <a href="">Projects</a>
        <a href="">Contact</a>
        <a href="">Open Source</a>
        <a href="">Blog</a>
        </div>
      </div>
      <div className="flex flex-col font-sans">
        <div>
        <h2 className="font-extrabold text-xl">Community</h2>
        </div>
        <div className="flex flex-col">
        <a href="">GitHub</a>
        <a href="">Twitter</a>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Linkdin</a>
        </div>
      </div>
      <div className="flex font-sans">
        
          <h2 className="font-extrabold text-xl">Services</h2>
        

        <div className="flex mt-7 ml-[-80px]">

        <div className="flex flex-col ">
          <a href="">UI/UX Design</a>
          <a href="">Web Development</a>
          <a href="">SEO</a>
          <a href="">React JS Services</a>
          <a href="">Node JS Services</a>
          <a href="">Next JS Services</a>
          <a href="">Web Devlopement Back-end</a>
        </div>
        
        <div className="flex flex-col">
          <a href="">Digital Marketing</a>
          <a href="">Graphic Design</a>
          <a href="">Content Writing</a>
          <a href="">Video Editing</a>
        </div>
        </div>
       
      </div>
      <div>
        <div>
        <h2 className="font-extrabold text-xl font-sans">Resources</h2>
        </div>
        <div className="flex flex-col">
        <a href="">Documentation</a>
        <a href="">FAQ</a>
        <a href="">Support</a>
        <a href="">License</a>
        </div>
      </div>
      <div className="font-sans">
        <div>
        <h2 className="font-extrabold text-xl">Legal</h2>
        </div>
        <div className="flex flex-col">
            
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookies</a>
        <a href="">Copyright</a>

        </div>
      </div>
      <div>
        <div>
        <h2 className="text-xl font-extrabold">Follow us</h2>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
            <a href="">
            <MdFacebook className="text-2xl" />
            </a>
            <a href="">Facebook</a>
            
            </div>
       
            <div className="flex items-center gap-2">
            <a href="">
            <AiFillTwitterCircle className="text-2xl" />
            </a>
            <a href="">Twitter</a>
            
            </div>
            <div className="flex items-center gap-2">
            <a href="">
            <FaInstagram className="text-2xl" />
            </a>
            <a href="">Instagram</a>
            
            </div>
            <div className="flex items-center gap-2">
            <a href="">
            <FaLinkedin className="text-2xl" />
            </a>
            <a href="">Linkdin</a>
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;


// <div>
// <div>
// <h2>Copyright</h2>
// </div>
// <div>
// <p>2023 The Agency. All rights reserved.</p>
// </div>
// </div>
// <div>
// <div>
// <h2>Developed by</h2>
// </div>
// <div>


// <p>
//   Frontend Design Template With Code <br /> And Some AI Tools!
// </p>
// </div>
// </div>