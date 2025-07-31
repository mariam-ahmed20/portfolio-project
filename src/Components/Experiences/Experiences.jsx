import React from 'react'
import style from './Experiences.module.css'

const Experiences = () => {
  return (
    <>
      <div className={ `container col-9 ${style.main}`}>
        <h6>EXPERIENCE</h6>
        <h3>WORK EXPERIENCE</h3>

        <div className={style.line}></div>

        <div className={style.pencils}>
          <i class={`fa-solid fa-pencil bg-primary ${style.pencil}`}></i>
          <div className={style.bubble}>
            <h4>Full Stack Develpoer <span>2017-2018</span></h4>
            <br />
            <p>
              Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.
            </p>
          </div>
        </div>

        <div className={style.pencils}>
          <i class={`fa-solid fa-pencil bg-danger ${style.pencil}`}></i>
          <div className={style.bubble}>
            <h4>Front End Developer at Google Company <span>2017-2018</span></h4>
            <br />
            <p>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
          </div>
        </div>
        
        <div className={style.pencils}>
          <i class={`fa-solid fa-pencil bg-warning ${style.pencil}`}></i>
          <div className={style.bubble}>
            <h4>System Analyst <span>2017-2018</span></h4>
            <br />
            <p>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
          </div>
        </div>
        <i class={`fa-solid fa-pencil ${style.pencil}`}></i>


      </div>
    </>
  )
}

export default Experiences