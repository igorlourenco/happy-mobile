import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {Feather} from "@expo/vector-icons";
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from "@expo-google-fonts/nunito";

import mapMarker from "./src/images/map-marker.png";
import {useFonts} from "expo-font";

export default function App() {
    const [fontsLoaded] = useFonts({
        nunito600: Nunito_600SemiBold,
        nunito700: Nunito_700Bold,
        nunito800: Nunito_800ExtraBold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map} initialRegion={{
                latitude: -10.2502971,
                longitude: -48.3523869,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
            }}>
                <Marker
                    icon={mapMarker}
                    calloutAnchor={{
                        x: 2.3,
                        y: 0.9
                    }}
                    coordinate={{
                        latitude: -10.2502900,
                        longitude: -48.3523500,
                    }}>
                    <Callout tooltip onPress={() => {
                        alert("oi")
                    }}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>
                                Lar das Crianças
                            </Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    2 orfanatos encontrados
                </Text>

                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {
                }}>
                    <Feather name="plus" color="#FFF"/>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    calloutContainer: {
        width: 140,
        height: 66,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: "center"
    },

    calloutText: {
        fontFamily: 'nunito700',
        color: "#0089A5",
        fontSize: 14,

        elevation: 3
    },

    footer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: "#FFF",
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        elevation: 3
    },

    footerText: {
        fontFamily: 'nunito700',
        color: "#8FA7B3"
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: "#15C3D6",
        borderRadius: 20,

        justifyContent: "center",
        alignItems: "center"
    }
});
