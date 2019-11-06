import React, { useState, useEffect } from 'react';

import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';
import { Map } from './styles';

export default function LocationA() {
    return (
        <Map
            initialRegion={{
                latitude: -22.90677,
                longitude: -43.22083,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }}
        />
    );
}
