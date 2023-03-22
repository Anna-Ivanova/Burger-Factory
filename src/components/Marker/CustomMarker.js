import { MarkerF } from '@react-google-maps/api';

export default function CustomMarker({ position }) {
    return <MarkerF position={position} zIndex={500000} icon={{
        url: "/images/marker.png"

    }} />
}