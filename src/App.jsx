import { React, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
const App = () => {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.6,
      ease: "expo.inOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "expo.inOut",
    });
    gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-40%",
      rotate: 0,
      duration: 2,
      delay: -0.7,
      ease: "expo.inOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.7,
      ease: "expo.inOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove}`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.5,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] ">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 w-full z-[10] px-8 py-8 ">
              <div className="logo flex gap-7 ">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-14 h-2 bg-white "></div>
                  <div className="line w-8 h-2 bg-white "></div>
                  <div className="line w-5 h-2 bg-white "></div>
                </div>
                <h3 className="text-3xl text-white -mt-[8px] leading-none">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 h-full w-full object-cover"
                src="./sky.png"
              ></img>
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 h-full w-full object-cover"
                src="./bg.png"
              ></img>
              <div className="text text-white absolute flex flex-col gap-1 top-25 left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-10deg]  ">
                <h1 className="text-9xl -ml-45">grand</h1>
                <h1 className="text-9xl ml-20">theft</h1>
                <h1 className="text-9xl -ml-20">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
              ></img>
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent  ">
              <div className="flex gap-4 items-center">
                <i className="ri-arrow-down-line text-2xl font-bold "></i>
                <h3 className="text-xl font-light">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[40px]"
                src="./ps5.png"
              ></img>
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center px-10 overflow-hidden bg-black">
            <div className="cntnr w-full flex text-white h-[80%]   ">
              <div className="limg relative h-full w-1/2">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                ></img>
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Still Hunting</h1>
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.{" "}
                </p>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,Ut
                  enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
                <button className="bg-yellow-500 px-10 py-5 text-2xl text-black mt-10 ">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
