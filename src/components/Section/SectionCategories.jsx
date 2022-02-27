import React from 'react'
import './section.css'
import { category } from './category'
import { useHistory } from "react-router-dom";

const SectionCategories = () => {

  let history = useHistory()

  return (
    <div className="section__category">
        {
          category && category.map(item => (
            <div key={item.id} className="category__item" onClick={() => history.push("/category")}>
              <img src={item.image} alt="" className="category__item__image"/>
              <p  className="category__item__title">{item.name}</p>
            </div>
          ))
        }
    </div>
  )
}

export default SectionCategories