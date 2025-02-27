import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div className='about'>
     <div className='about-title'>
        <h1>About me </h1>
        <img src={theme_pattern}/>
     </div>
     <div className='about-scetion'>
        <div className='about-right'>
        <p>I am a results-driven software engineer with three years of experience in 
        full-stack development, cloud computing, and DevOps. I specialize in building 
        scalable and high-performance applications using technologies like React.js, 
        Node.js, Spring Boot, and cloud platforms such as AWS and Kubernetes. 
        Currently, I work at Booz Allen Hamilton in the USA, where I focus on optimizing 
        cloud infrastructure, automating CI/CD pipelines, and improving system efficiency. 
        I am passionate about problem-solving and developing secure, efficient, and 
        innovative software solutions. Outside of work, I enjoy gaming, tech blogging, 
        and exploring advancements in artificial intelligence.</p>
        
        </div>
     </div>
    </div>
  )
}

export default About;
