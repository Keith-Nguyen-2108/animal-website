import React, { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
const Map = () => {

    const apiKey = 'pk.eyJ1Ijoia2VpdGgtbmd1eWVuLTIxMDgiLCJhIjoiY2t5aXpqOGxmMDRrYzJ1cGt0Yng1ZTFpbCJ9.bG7ZZUruEFzJTHY6TrJwgQ'

    const [viewport, setViewport] = useState({
        latitude: 9.5,
        longitude: 105.7,
        zoom: 9
        // center: [109,9],
    });

    const navControlStyle = {
        right: 10,
        top: 10
    };

    const data = [
        {
            id: 1,
            lat: 9.567941,
            long: 105.745900
        },
        {
            id: 2,
            lat: 9.571219,
            long: 105.746927
        },
        {
            id: 3,
            lat: 9.570929,
            long: 105.744803
        },
        {
            id: 4,
            lat: 9.566659,
            long: 105.742109
        },
    ]

    return(
    <div className=" w-100" style={{boxSizing: "border-box"}}>
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={apiKey}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapStyle="mapbox://styles/keith-nguyen-2108/ckyy03ec0000114pk0idpi8rk"
            width="100%"
            height="500px"
        >
            <NavigationControl style={navControlStyle} />
            {
                data && data.map(item => (
                    <Marker key={item.id} latitude={item.lat} longitude={item.long} offsetLeft={-20} offsetTop={-10}>
                        <i className='fas fa-map-marker-alt' style={{ fontSize: viewport.zoom * 4, color: '#ff3333' }}></i>
                    </Marker>
                ))
            }
        </ReactMapGL>
    </div>)
};

export default Map;
