import React,{useEffect,useState} from 'react'
import './Body.css'
import coder from '../../pics/coder.png'
import {useInView} from 'react-intersection-observer';
import {motion,useAnimation} from 'framer-motion'

function Body() {
  const {ref,inView} = useInView()
  const animation = useAnimation()
  const animation2 = useAnimation()
  const animation3 = useAnimation()
  // const [offSetY,setOffSetY] = useState(0);

  // const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(()=>{
    // window.addEventListener("scroll",handleScroll)
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',
          duration:2.5,
          bounce:0.2
        }
      })
      animation2.start({
        x:0,
        transition:{
          delay:0.5,
          type:'spring',
          duration:1.5,
          bounce:0.2
        }
      })
      animation3.start({
        x:0,
        transition:{
          delay:1,
          type:'spring',
          duration:2.5,
          bounce:0.2
        }
      })
    }
    if(!inView){
      animation.start({x:'-100vw'})
      animation2.start({x:'100vw'})
      animation3.start({x:'-100vw'})
    }
    // return () => window.removeEventListener("scroll",handleScroll);
  },[inView])
  return (
    <div className='body'>
      
      <div ref={ref} className='first'>
          <div className='first_first'>
              <motion.h1 animate={animation2} id='hiThere'>
                Hi, There
              </motion.h1>
              <motion.h1 animate={animation} id='namaste'>
                I am Archit Soni, नमस्ते!!
              </motion.h1>
          </div>

          <div className='first_second'>
              <motion.h1 animate={animation3} id='iam'>
                I am a Full-Stack Developer and Data Scientist
              </motion.h1>
          </div>

      </div>

      <div className='second'>
          <img id='img1' src={coder}/>
      </div>

      <div className='third'>
          <h1 id="more">To know more, go to Projects or About or CLICK on my Profile Picture 😇</h1>
      </div>
    
    </div>
  )
}

export default Body