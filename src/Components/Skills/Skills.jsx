import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import style from './Skills.module.css'

const Skills = () => {


    let progressBars = [
      {label :"Photoshop" , percent : 75 , color : "rgb(45,153,240)"},
      {label :"jQuery" , percent : 85 , color : "rgb(236,85,82)"},
      {label :"HTML5" , percent : 80 , color : "rgb(249,190,62)"},
      {label :"CSS3" , percent : 70 , color:"rgb(169,76,185)"},
      {label :"WordPress" , percent : 90 , color : "rgb(46,165,153)"},
      {label :"SEO" , percent : 80 , color : "rgb(64,85,179)"}
    ]


  return (

    <>
      <div className={`container col-9 ${style.main}`}>
        <h6>MY SPECIALTY</h6>
        <h3>MY SKILLS</h3>
        <p>
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
        </p>
        <div className="row">
          {progressBars.map((progressBar, index) => (
            <div className='col-md-6' key={index}>
              <li>
                {progressBar.label}
                <ProgressBar className={`mt-1 ${style.bars}`} now={progressBar.percent}>
                  <ProgressBar
                    now={progressBar.percent}
                    label={`${progressBar.percent}%`}
                    style={{ backgroundColor: progressBar.color }}
                    className={style.innerBar}
                  />
                </ProgressBar>
              </li>
            </div>
            
          ))}


        </div>

      </div>
    </>
  )
}

export default Skills

 