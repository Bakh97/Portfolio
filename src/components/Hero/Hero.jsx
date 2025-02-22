import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=''/>
      <h1><span>I am Bakhsinderdeep Singh,</span> Full stack developer based in USA</h1>
      <p>I am recent graduate from clark university worcester,I have worked as software developer in infosys and Abbvie</p>
      <div className='hero-action'>
     <div className='hero-connect'>
        connect with me 
     </div>
     <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
