import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I am Bakhsinderdeep Singh,</span> Full stack developer based in
        USA
      </h1>
      <p>
        I am recent graduate from clark university worcester,I have worked as
        software developer in Sky productivity and Booz Allen Hamilton
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">connect with me</a>
        </div>
        <div className="hero-connect">
          <a href="https://drive.google.com/drive/folders/1JI2Zvo_xKRO7FhQYM0MlIa4q0CKhRyk3?usp=sharing">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
