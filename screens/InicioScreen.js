import React from "react";
import { StyleSheet, Text, View, Button, Image, Pressable, Linking, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export const InicioScreen =()=>{

    return(
        <View>
            <Image source={require("../fuego.jpg")} style={styles.image}/>
            <Text>Caracteristicas</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
    )
}

const styles=StyleSheet.create({
    image: {
        width: 370,
        height: 160,
        resizeMode: "contain",
    }
})