import React from "react";
import image0 from "../../assets/Images/portfolio.png";
import Card1 from "../../assets/Firstcard/Card1";
import image1 from "../../assets/Images/landing.png";
import image2 from "../../assets/Images/resturant.png";
import image3 from "../../assets/Images/trib.png";
import image4 from "../../assets/Images/login.png";
import image5 from "../../assets/Images/paralex.png";
import image6 from "../../assets/Images/coaching.png";
import image7 from "../../assets/Images/tic.png";
import image8 from "../../assets/Images/qr.png";
import image9 from "../../assets/Images/rp.png";
import image10 from "../../assets/Images/tc.png";
import image11 from "../../assets/Images/dr.png";
import image12 from "../../assets/Images/calc.png";
import image13 from "../../assets/Images/additiongame.png";
const Project = () => {
  return (
    <div>
      <h1 className="text-center bg-blue-400 font-sans text-3xl p-7 font-bold ">
        Projects Store
      </h1>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl w-72 bg-slate-400 mt-4 rounded-lg text-center text-green-300 font-bold">
          HTML CSS JS Projects{" "}
        </h1>
        <p className="text-xl mt-6">
          {" "}
          Here are some of my projects that I have worked on using HTML, CSS,
          and JavaScript. You can find the source code for each project below.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 px-[10%]  mt-4">
        {/* card component add  */}
        <Card1
          image={image0}
          title="My Personal portfolio"
          link1="https://nitish-mandal-bca-sable-iota.vercel.app/"
          link2="https://github.com/mandalnitish01/MyPortfolio"
        />
        <Card1
          image={image7}
          title="TIC TAC TOE Game"
          link1="https://tic-tac-toe-game-six-tan.vercel.app/"
          link2="https://github.com/mandalnitish01/TIC-TAC-TOE-GAME"
        />
           <Card1
          image={image13}
          title="Addition game"
          link1="https://mandalnitish01.github.io/Game/"
          link2="https://github.com/mandalnitish01/Amazing_Addition_game"
        />
         <Card1
          image={image8}
          title="QR code genrator"
          link1="https://mandalnitish01.github.io/qrcodegenerator-main/"
          link2="https://github.com/mandalnitish01/qrcodegenerator-main"
        />
           <Card1
          image={image9}
          title="QR code genrator"
          link1="https://mandalnitish01.github.io/qrcodegenerator-main/"
          link2="https://github.com/mandalnitish01/qrcodegenerator-main"
        />
           <Card1
          image={image10}
          title="Temprature Convertor"
          link1="https://mandalnitish01.github.io/temprature--convertor/"
          link2="https://github.com/mandalnitish01/temprature--convertor"
        />
           <Card1
          image={image11}
          title="Dice Roller game"
          link1="https://mandalnitish01.github.io/Dice_roller_game/"
          link2="https://github.com/mandalnitish01/Dice_roller_game"
        />
           <Card1
          image={image12}
          title="Basics Calculator"
          link1="https://calc-beta-khaki.vercel.app/"
          link2="https://github.com/mandalnitish01/calc"
        />
        
        <Card1
          image={image1}
          title="Devloper landing page"
          link1="https://devloper-landing-page.vercel.app/"
          link2="https://github.com/mandalnitish01/Devloper-landing-page"
        />
        <Card1
          image={image2}
          title="Resturant design"
          link1="https://resturant-website-flame.vercel.app/"
          link2="https://github.com/mandalnitish01/Resturant-website"
        />
        <Card1
          image={image3}
          title="Tribute website"
          link1="https://the-tribute-website-tau.vercel.app/"
          link2="https://github.com/mandalnitish01/The_Tribute_website"
        />
        <Card1
          image={image4}
          title="Login form"
          link1="https://job-login-form-4rdl8zjpr-mandalnitish01s-projects.vercel.app/"
          link2="https://github.com/mandalnitish01/Job_login_Form"
        />
        <Card1
          image={image5}
          title="Parallax Effect"
          link1="https://parallax-website-one-azure.vercel.app/"
          link2="https://github.com/mandalnitish01/Parallax-website"
        />
        <Card1
          image={image6}
          title="Coaching Website"
          link1="https://education-website-self-two.vercel.app/"
          link2="https://github.com/mandalnitish01/Education_website"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-2xl w-72 bg-slate-400 mt-4 rounded-lg text-center text-green-300 font-bold">
          React JS Projects{" "}
        </h1>
        <p className="text-xl mt-6">
          {" "}
          Here are some of my projects that I have worked on using React js. You
          can find the source code for each project below.
        </p>

        <p>Comming Coon</p>
        <div className="flex gap-5">
          <div class="h-8 w-8 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-8 w-8 bg-green-600 rounded-full animate-bounce"></div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-[10%]  mt-4"></div>
      </div>
    </div>
  );
};

export default Project;
