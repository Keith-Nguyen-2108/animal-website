import React from 'react';
import Pin from './Pin'
import './masonry.css'

const PinterestLayout = () => {

    const arr = ['size1', 'size2', 'size3', 'size4', 'size5']

    return (
        <div className="pinterest__layout">
            <h1 className="text-uppercase mb-0 category__title">mammals</h1>
            <div className="pin__container">
                {
                    [...Array(100).keys()].map(item => (
                        <Pin size={arr[Math.floor(Math.random() * arr.length)]} />
                    ))
                }
            </div>
        </div>
    )
};

export default PinterestLayout;
