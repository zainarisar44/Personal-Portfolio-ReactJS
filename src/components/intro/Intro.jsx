import "./intro.scss";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";

const Intro = () => {
  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Prashant Sharma</h1>
          <h3>
            FullStack
            <span> Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
