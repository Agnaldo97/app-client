import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { Marker } from 'react-native-maps';

import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import { getPixelSize } from '../utils';
import Search from '../Search';
import Directions from '../Directions';
import Details from '../Details';

import markerImage from '../../../assets/marker.png';
import {
    Map,
    ViewMap,
    LocationBox,
    LocationText,
    LocationTimeBox,
    LocationTimeText,
    LocationTimeMin,
} from './styles';

Geocoder.init('AIzaSyCrFjKi6by7gdmNtA3oX7MMCq1wQfYQfdw');

export default function Maps({ navigation }) {
    const [coordinates, setCoordinates] = useState({});
    const [destination, setDestination] = useState(null);
    const [duration, setduration] = useState({});
    const [location, setLocation] = useState(null);

    const mapViewRef = useRef(null);

    // const hospital = useSelector(state => state.hospital);

    async function getMyLocation(latitude, longitude) {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        return address.substring(0, address.indexOf(','));
    }

    useEffect(() => {
        async function getGeolation() {
            Geolocation.getCurrentPosition(
                ({ coords: { latitude, longitude } }) => {
                    const myLocation = getMyLocation(latitude, longitude);
                    setLocation(myLocation);

                    setCoordinates({
                        region: {
                            latitude,
                            longitude,
                            latitudeDelta: 0.0143,
                            longitudeDelta: 0.0134,
                        },
                    });
                }, // success
                () => { }, // error
                {
                    timeout: 2000,
                    enableHighAccuracy: true,
                    maximumAge: 1000,
                }
            );
        }
        getGeolation();
    }, []);

    // function handleSubmit() {
    //     navigation.navigate('QRCodePage');
    // }

    function handleLocationSelected(data, { geometry }) {
        const {
            location: { lat: latitude, lng: longitude },
        } = geometry;

        setDestination({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            },
        });
    }

    return (
        <ViewMap>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="rgba(255,255,255,0.1)"
            />
            <Map
                initialRegion={coordinates.region}
                showsUserLocation
                loadingEnabled
                ref={mapViewRef}
            >
                {destination && (
                    <>
                        <Directions
                            origin={coordinates.region}
                            destination={destination.destination}
                            onReady={result => {
                                setduration({
                                    duration: Math.floor(result.duration),
                                });
                                mapViewRef.current.fitToCoordinates(
                                    result.coordinates,
                                    {
                                        edgePadding: {
                                            right: 50,
                                            left: 50,
                                            top: 50,
                                            bottom: 350,
                                        },
                                    }
                                );
                            }}
                        />
                        <Marker
                            coordinate={destination.destination}
                            anchor={{ x: 0, y: 0 }}
                            image={markerImage}
                        >
                            <LocationBox>
                                <LocationText>
                                    {destination.destination.title}
                                </LocationText>
                            </LocationBox>
                        </Marker>

                        {/* <Marker
                            coordinate={destination.region}
                            anchor={{ x: 0, y: 0 }}
                        >
                            <LocationBox>
                                <LocationTimeBox>
                                    <LocationTimeText>
                                        {duration}
                                    </LocationTimeText>
                                    <LocationTimeMin>MIN</LocationTimeMin>
                                </LocationTimeBox>
                                <LocationText>{location}</LocationText>
                            </LocationBox>
                        </Marker> */}
                    </>
                )}
            </Map>

            {destination ? (
                <Details />
            ) : (
                    <Search onLocationSelected={handleLocationSelected} />
                )}
        </ViewMap>
    );
}
