import React, { useState } from 'react'
import firstImg from '../../assets/img-1-C4nS0eD8.jpg'
import secondImg from '../../assets/img-2-D-4H1m4L.jpg'
import thirdImg from '../../assets/img-3-pR2ZEVY9.jpg'
import fourthImg from '../../assets/img-4-tHccITd-.jpg'
import fifthImg from '../../assets/img-5-lAucr__a.jpg'
import sixthImg from '../../assets/img-6-DFW03AZ3.jpg'

import SecondaryNav from '../SecondaryNav/SecondaryNav'

import style from './Work.module.css'

const Work = () => {
  let [all , setAll] =useState(false)

  let images = [firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg ]


  let showAll =() => {
    setAll(!all)
  }

  return (
    <>
    
      <div className={`container col-9 ${style.main}`}>
        <h6>MY WORK</h6>
        <h3>RECENT WORK</h3>
        <SecondaryNav />
          <div className={`row ${style.workRow} `}>
            {
              images.slice(0, all ? images.length : 4).map((image) => (
                  <div className={`col-md-6 ${style.images}`}>
                    <img src={image} alt="" />
                    <div className={style.colored}>
                      <button>WORK 02</button>
                      <h6>Animation</h6>
                      <div className={style.bottom}>
                        <button>
                          <i class="fa-solid fa-share-nodes"></i>
                        </button>
                        <button>
                          <i class="fa-regular fa-eye"></i> 100
                        </button>
                        <button>
                          <i class="fa-regular fa-heart"></i> 49
                        </button>
                      </div>
                    </div>
                  </div>
              ))}
              
          </div>

          <button onClick={showAll} className={style.button}>Show More</button>

        </div>

    </>
  )
}

export default Work

