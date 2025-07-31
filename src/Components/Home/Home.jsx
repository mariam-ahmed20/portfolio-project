import { Carousel } from 'react-bootstrap'
import React from 'react'
import jackson from '../../assets/img_bg_1-PzvG2r05.jpg'
import designer from '../../assets/img_bg_2-DzCs5o-0.jpg'
import styles from './Home.module.css';

const Home = () => {
  return (
    <>

    <Carousel interval={2000} className={styles.slides} fade={true}>
      <Carousel.Item className={styles.imgOne}>
        <img src={jackson} alt="" />
        <Carousel.Caption className={styles.carousell}>
          <h1>
            Hi! <br /> Im Jackson
          </h1>
          <p>100% html5 bootstrap templates Made By <a href="https://colorlib.com/">Colorlib.com</a></p>
          <button>DOWNLOAD CV <i class="fa-solid fa-download"></i></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.imgTwo}>
        <img src={designer} alt=""  />
        <Carousel.Caption className={styles.carousell}>
          <h1>I am <br /> a Designer</h1>
          <p>100% html5 bootstrap templates Made By <a href="https://colorlib.com/">Colorlib.com</a></p>
          <button>VIEW PORTFOLIO <i class="fa-solid fa-briefcase"></i> </button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

    </>
  )
}

export default Home