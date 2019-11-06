import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import MapView, { ProviderPropType } from 'react-native-maps';
import MyLocationMapMarker from './MyLocationMapMarker';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function BugMarkerWontUpdate({ navigation }) {
    const state = {
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
        },
        amount: 0,
        enableHack: false,
    };

    function handleSubmit() {
        navigation.navigate('QRCodePage');
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={state.region}>
                <MyLocationMapMarker
                    coordinate={state.coordinate}
                    heading={state.amount}
                    enableHack={state.enableHack}
                />
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Hospital')}
                    style={[styles.bubble, styles.button, styles.hackButton]}
                >
                    <Text style={styles.toggleHack}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={[styles.bubble, styles.button, styles.hackButton]}
                >
                    <Text style={styles.toggleHack}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

BugMarkerWontUpdate.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    hackButton: {
        width: 200,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    toggleHack: { fontSize: 12, fontWeight: 'bold' },
    ammountButton: { fontSize: 20, fontWeight: 'bold' },
});
