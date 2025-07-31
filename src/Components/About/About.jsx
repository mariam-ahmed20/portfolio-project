import React from 'react'
import style from './About.module.css'

const About = () => {
  return (
    <>
        <div className={`container ${style.main} col-9`}>
            <h6>ABOUT US</h6>
            <h3>WHO AM I?</h3>
            <p>
                <span>Hi Im Jackson Ford</span> On her way she met a copy. The copy warned the little Blind Text, that where it cone from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the little Blind Text should turn around and return to its own, safe country.
            </p>
            <p>
              Even the all-powerful Pointing has no control about the build text it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
            </p>




            <div className="row">
              <div className={`${style.iconOne} ${style.icon} col`}>
                <i class="fa-regular fa-lightbulb"></i>
                <h5>Graphic Design</h5>
              </div>
              <div className={`${style.iconTwo} ${style.icon} col`}>
                <i class="fa-solid fa-earth-africa"></i>
                <h5>Web Design</h5>
              </div>
              <div className={`${style.iconThree} ${style.icon} col`}>
                <i class="fa-solid fa-database"></i>
                <h5>Software</h5>
              </div>
              <div className={`${style.iconFour} ${style.icon} col`}>
                <i class="fa-solid fa-mobile-screen-button"></i>
                <h5>Application</h5>
              </div>
            </div>


            
            
            

        </div>
    </>
  )
}

export default About