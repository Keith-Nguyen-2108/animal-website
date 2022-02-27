import React from 'react';
import { list } from '../Slider/data';

const Pin = (props) => {

    const random = Math.floor(Math.random() * list.length)

  return <div className={`border-0 pin card ${props.size}`}>
      <img src={list[random].url} alt="" style={{objectFit:"cover", width: "100%", height: "100%", borderRadius: '16px'}} />
  </div>;
};

export default Pin;
