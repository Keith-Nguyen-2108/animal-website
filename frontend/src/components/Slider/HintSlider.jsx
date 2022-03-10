import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './hint__slider.css'
import img from '../../assets/slider/leopard.jpg'

const HintSlider = () => {

  const options = {
    loop: true,
    responsiveClass:true,
    smartSpeed: 300,
    responsive:{
      300:{
        item: 1
      },
      600:{
        item: 3
      },
      1000: {
        items: 5
      }
    }
  }

  return (
    <div className="hint__slider">
      <OwlCarousel
        className="owl-theme"
        {...options}
        nav
        loop
      >
        {
          [...Array(20).keys()].map((item, index) => (
            <div key={index} className="hint_item">
              <img className="hint__item__image" src={img} alt="hint__img" />
            </div>
          ))
        }
        </OwlCarousel>  
    </div>
  )
}

export default HintSlider