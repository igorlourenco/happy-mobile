import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import mapMarker from "../images/map-marker.png";
import {Feather} from "@expo/vector-icons";

import {useNavigation} from "@react-navigation/native"
import {RectButton} from "react-native-gesture-handler";

export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetails (){
        navigation.navigate('OrphanageDetails');
    }

    function handleNavigateToCreateOrphanage (){
        navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map} initialRegion={{
                latitude: -10.2022607,
                longitude: -48.34156,
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
                        latitude: -10.2022537,
                        longitude: -48.34176,
                    }}>
                    <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
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

                <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name="plus" color="#FFF"/>
                </RectButton>
            </View>

        </View>
    )
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