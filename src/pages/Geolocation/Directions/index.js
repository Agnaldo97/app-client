import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

export default function Directions({ destination, origin, onReady }) {
    return (
        <MapViewDirections
            destination={destination}
            origin={origin}
            onReady={onReady}
            apikey="AIzaSyCrFjKi6by7gdmNtA3oX7MMCq1wQfYQfdw"
            strokeWidth={4}
            strokeColor="#222"
        />
    );
}
