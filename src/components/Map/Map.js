import { GoogleMap } from '@react-google-maps/api';
import { useRef } from 'react';
import React from 'react';
import CustomMarker from '../Marker/CustomMarker';
import './map.scss';




const containerStyle = {
    width: '860px',
    height: '483px'
};
const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    fullscreenControl: false,
    streetViewControl: false
}
export default function Map({ center }) {

    const mapRef = useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map

    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return (
        <div className='map_container' id='location'>
            <h2 className='map_title title'> Location</h2>
            <p className='map_adress'><b>Burger Factory</b> Pl. de la Riponne 10 1005 Lausanne 021 800 00 00</p>
            <div className='map_wrapper' >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={defaultOptions}
                >
                    <CustomMarker position={center} />

                    <></>
                </GoogleMap>
            </div>
        </div>
    )
}