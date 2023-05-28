import { StyleSheet, Text, View, Button, Image, Pressable, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ContactanosScreen =()=>{

    const handleInstagramPress = () => {
        const url = "https://www.instagram.com/restaurante.escuela.udi/";
        Linking.openURL(url);
    };

    const handleWhatsappPress = () => {
        const url = "https://api.whatsapp.com/send/?phone=71399694&text=%C2%A1Estoy+interesado%21&type=phone_number&app_absent=0";
        Linking.openURL(url);
    };

    const handleFacebookPress = () => {
        const url = "https://www.facebook.com/Restaurante.Escuela.UDI.by.Dossier";
        Linking.openURL(url);
    };
    

    return(
        <View>
            <Pressable onPress={handleInstagramPress}>
                <Icon name="instagram-square" size={50} color="#000000" />
                <Text>Instagram</Text>
            </Pressable>
            <Pressable onPress={handleWhatsappPress}>
                <Icon name="whatsapp-square" size={50} color="#000000" />
                <Text>Instagram</Text>
            </Pressable>
            <Pressable onPress={handleFacebookPress}>
                <Icon name="facebook-square" size={50} color="#000000" />
                <Text>Instagram</Text>
            </Pressable>
            <Text>Vive la experiecnia Dossier</Text>
            <Image source={require("../recursos/OneDrive_2023-05-28/ARCHIVOS COMPARTIDOS UDINOVA MOVIL/RECURSOS/IMG_5843.jpg")}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}