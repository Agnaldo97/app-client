import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';

import { ViewMap } from './styles';
// AIzaSyBqyGKkzID2rYi7n5oFOoe4HLILIkiezBA

export default function Maps() {
    const [loading, setLoading] = useState(false);
    const [coordinates, setCoordinates] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    return (
        <ViewMap>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0068,
                        longitudeDelta: 0.0068,
                    }}
                />
            )}
        </ViewMap>
    );
}
