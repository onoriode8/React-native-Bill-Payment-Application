import { useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native'
import Foundation from '@expo/vector-icons/Foundation';

import DefaultAvatar from '../../../assets/images/default-avatar-profile.jpg'
import Context from '../../hooks/context';


export default function ProfileScreen() {
    const {} = useContext(Context)//get user personal data from server and render here below including profile if any
    return (
        <SafeAreaView>
            <View >
                <View style={style.imageWrapper}>
                    <View style={style.imagesWrap}>
                        <Image source={DefaultAvatar} style={style.imageStyle}/>
                        <Foundation name="camera" size={32} color="#17BEBB" />
                    </View>
                    <View style={style.refIdWrapper}>
                        <Text style={[style.text, { marginRight: 5}]}>ReferId</Text>
                        <Text style={[style.text, {  marginLeft: 5 }]}>Onoriode2685</Text>
                    </View>
                </View>
                <View style={style.informationWrapper}>
                    <View style={style.wrapper}>
                        <Text style={style.text}>Full Name</Text>
                        <Text style={style.text}>ONORIODE UMUKORO</Text>
                    </View>
                    <View style={style.wrapper}>
                        <Text style={style.text}>Phone Number</Text>
                        <Text style={style.text}>O9055364280</Text>
                    </View>
                    <View style={style.wrapper}>
                        <Text style={style.text}>UserName</Text>
                        <Text style={style.text}>Onoriode_1</Text>
                    </View>
                    <View style={style.wrapper}>
                        <Text style={style.text}>Gender</Text>
                        <Text style={style.text}>Male or Female</Text>
                    </View>
                    <View style={style.wrapper}>
                        <Text style={style.text}>Date of birth</Text>
                        <Text style={style.text}>02/06/2000</Text>
                    </View>
                    <View style={style.wrapper}>
                        <Text style={style.text}>Email</Text>
                        <Text style={style.text}>test@gmail.com</Text>
                    </View>
                    <View style={style.wrapper}>
                        <Text style={style.text}>Address</Text>
                        <Text style={style.text}>No 4 Osubi</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    imageWrapper: {
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        paddingBottom: 20,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    imagesWrap: {
        alignItems: "center",
        flexDirection: "row"
    },
    imageStyle: {
        width: 200,
        height: 200
    },
    refIdWrapper: {
        alignItems: "center",
        flexDirection: "row"
    },
    informationWrapper: {
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    wrapper: {
        alignItems: "center",
        paddingBottom: 40,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 13,
        color: "grey",
        fontWeight: "900"
    }
})