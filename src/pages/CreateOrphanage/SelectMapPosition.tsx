import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import MapView, {MapEvent, Marker} from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';

interface PositionProps {
    latitude: number;
    longitude: number;
}

export default function SelectMapPosition() {
    const navigation = useNavigation();

    const [position, setPosition] = useState({latitude: 0, longitude: 0});

    function handleNextStep(position: PositionProps) {
        navigation.navigate('OrphanageData', {position});
    }

    function handleSelectMapPosition(event: MapEvent) {
        const {latitude, longitude} = event.nativeEvent.coordinate;

        setPosition({latitude, longitude});
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: -10.2022607, // Latitude that refers some place in your city
                    longitude: -48.34156, // Longitude that refers some place in your city
                    latitudeDelta: 0.008,             // Latitude and Longitude info are available
                    longitudeDelta: 0.008,            // on Google Maps (DO NOT CHANGE THE DELTAS)
                }}
                style={styles.mapStyle}
                onPress={handleSelectMapPosition}
            >
                {position.latitude !== 0 && (
                    <Marker
                        icon={mapMarkerImg}
                        coordinate={{
                            latitude: position.latitude,
                            longitude: position.longitude,
                        }}
                    />
                )}
            </MapView>

            <RectButton style={styles.nextButton} onPress={(() => {
                handleNextStep(position)
            })}>
                <Text style={styles.nextButtonText}>Próximo</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    nextButton: {
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,

        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 40,
    },

    nextButtonText: {
        fontFamily: 'nunito800',
        fontSize: 16,
        color: '#FFF',
    }
})