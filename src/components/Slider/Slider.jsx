import React, { useEffect, useState } from "react"
import "./slider.css"
import { SliderEffect } from "../../utils/effect"
import { TweenLite } from "gsap/gsap-core"
import { list } from './data'


const Slider = () => {
    const [effects, setEffects] = useState()
    // const [active, setActive] = useState(0)
    const [item, setItem] = useState(0)
    
    let index = 0
    const autoIncre = () => {
        index++
    }

    // Autoplay slider
    useEffect(() => {
        const parent = document.querySelector(".slider")
        const images = document.querySelectorAll(".slider__image")

        if (parent && images) {
            const effects = SliderEffect({
                parent,
                images: Array.from(images)
            })
            setEffects(effects)
        }

        let interval = setInterval(() => {
            autoIncre()
            if (index >= images.length) {
                index = 0
            }
            // setActive(index)
            setItem(index)
        }, 4000)

        // return () => {
        //     clearInterval(interval, autoIncre, true)
        // }
    }, [])

    // 3D Effect
    useEffect(() => {
        if (effects) {
            effects.material.uniforms.nextImage.value = effects.images[item]
            TweenLite.to(effects.material.uniforms.dispFactor, 1, {
                value: 1,
                ease: "Expo.easeOut",
                onComplete: () => {
                    effects.material.uniforms.currentImage.value = effects.images[item]
                    effects.material.uniforms.dispFactor.value = 0.0
                }
            })
        }
    }, [item, effects])

    return (

        <div className="slider">
            {list.map((animal, index) => {
                return (
                    <div
                        className="slider__information"
                        style={{ width: "100%", height: "100%" }}
                        key={index}
                        hidden={index !== item}
                    >
                        <img src={animal.url} className="slider__image" alt="Animal"></img>
                        <div className="slider__details">
                            <div className="slider__details__label">
                                NAME
                                <span className="slider__details__label-bar"></span>
                            </div>
                            <span
                                id="name"
                                className="slider__details__text"
                            >
                                {animal.name}
                            </span>
                            <div className="slider__details__label">
                                EAT
                                <span className="slider__details__label-bar"></span>
                            </div>
                            <span
                                id="eat"
                                className="slider__details__text"
                            >
                                {animal.eat}
                            </span>
                            <div className="slider__details__label">
                                AGE
                                <span className="slider__details__label-bar"></span>
                            </div>
                            <span
                                id="age"
                                className="slider__details__text"
                                style={{ fontFamily: "'Sofia', cursive" }}
                            >
                                {animal.age}
                            </span>
                        </div>
                    </div>
                )
            })}
            {/* <div className="slider__btn" style={{ top: `calc(50% - ${list.length * 30}px)` }}>
                {
                    [...Array(list.length)].map((_, index) => (
                        <div key={index}
                            className={`slider__btn__item ${index === active && 'slider__btn__item-active'}`}
                            onClick={() => {
                                setActive(index);
                                setItem(index)
                            }}
                        >
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Slider
