import React from 'react';
import { list } from '../Slider/data';
import {useHistory} from 'react-router-dom'

const Pin = (props) => {

    const random = Math.floor(Math.random() * list.length)
    const history = useHistory()

  return <div className={`border-0 pin card bg-transparent ${props.size}`}>
      <img src={list[random].url} alt="" 
      style={{
          objectFit:"cover", 
          width: "100%", 
          height: "100%", 
          borderRadius: '16px',}}
          onClick={() => history.push("/detail")}
          />
  </div>;
};

export default Pin;
