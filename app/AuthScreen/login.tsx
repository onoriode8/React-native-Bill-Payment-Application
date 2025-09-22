import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as Device from 'expo-device';
import { Link, router } from 'expo-router';
import { useContext, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";
// import secureStorage from 'expo-secure-store';

//use react-native-paper for text, theme and button TextInput. after installing the library with npx expo react-native-paper
import { PROD_API_URL } from '../config';
import Error from "../error/error";
import AuthContext from "../hooks/context";
import Backdrop from '../util/backdrop/backdrop';
import AppLogo from '../util/logo/app-logo';


interface LoginProps {
    navigation: Function
}

export default function Login({ navigation }) {
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [fullname, setFullname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [loading, setLoading] = useState<boolean>(false)

    const [error, setError] = useState<string>()
    const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false)

    const { setAuthentication, userfunc } = useContext(AuthContext)

// Retrieve
// const user = JSON.parse(await AsyncStorage.getItem('user'));
    
    const toggleAuthPage = () => {
        setIsSignup(prevState => !prevState)
    }

    const loginHandler = async () => {
        // router.replace("/util/verifyEmail") //for Expo
        navigation.replace("verify-email")
        console.log("Clicked")
        const osName = Device.osName
        const brand = Device.brand
        const modelName = Device.modelName
        const osVersion = Device.osVersion
        const deviceName = Device.deviceName
                
        const userAgent = `${osName} ${brand} ${modelName} ${osVersion} ${deviceName}`;

        if(email.length === 0) {
            setIsEmailEmpty(true)
        }
        if(password.length === 0) {
            setIsPasswordEmpty(true)
        }
        if(email.length < 10 && password.length < 5 && fullname.length < 5) return
        try {
            setLoading(true)
            const res = await axios.post(`${PROD_API_URL}/user/login`, {
                email, password
            }, {
                headers: {
                    "X-Device-UA": userAgent
                }
            })
            setLoading(false)
            setEmail("")
            setPassword("")
            if(res.data?.isEmailVerified === false) { 
                userfunc({
                    fullname: res.data.fullname, 
                    token: res.data.token, 
                    email: res.data.email, 
                    userId: res.data.userId,
                    totalBalance: res.data.totalBalance
                })
                router.replace("/util/verifyEmail")
                //throw error
            }
            userfunc({
                fullname: res.data.fullname, 
                token: res.data.token, 
                email: res.data.email, 
                userId: res.data.userId,
                totalBalance: res.data.totalBalance
            })
            setAuthentication(true)
            const value = JSON.stringify({ fullname: res.data.fullname, token: res.data.token, 
                email: res.data.email, userId: res.data.userId,
                totalBalance: res.data.totalBalance
            });
            await AsyncStorage.setItem("userData", value)
            router.replace("/dashboard/dashboard")
        } catch(err: any) {
            setLoading(false)
            console.log("96", err.response.data)
            setEmail("")
            setPassword("")
            setError(err.response?.data || "Something went wrong, Please try again later.")
        }
    }

    // const user = JSON.parse(AsyncStorage.getItem('user').then(res => {
    //     console.log("USER FROM ASYNC-STORAGE", res)
    // }));

    // console.log("ch", PROD_API_URL)

    const signupHandler = async () => {
            // router.push("/util/verifyEmail")
        const osName = Device.osName
        const brand = Device.brand
        const modelName = Device.modelName
        const osVersion = Device.osVersion
        const deviceName = Device.deviceName
        const userAgent = `${osName} ${brand} ${modelName} ${osVersion} ${deviceName}`
        // await AsyncStorage.setItem('user', JSON.stringify(userData));
        // const user = JSON.parse(await AsyncStorage.getItem('user'));
        // console.log("USER FROM ASYNC-STORAGE", user)
        if(email.length === 0) {
            setIsEmailEmpty(true)
        }
        if(password.length === 0) {
            setIsPasswordEmpty(true);
        }
        if(email.length < 10 && password.length < 5 && fullname.length < 5) return
        try {
            setLoading(true)
            // console.log("check", PROD_API_URL)
            // console.log(userAgent)
            const res = await axios.post(`${PROD_API_URL}/user/signup`, {
                    email, fullname, password 
                }, {
                    headers: {
                        "X-Device-UA": userAgent,
                    },
                }
            )
            console.log("RES", res);
            setEmail("")
            setPassword("")
            setFullname("")
            // Save
            // await AsyncStorage.setItem('user', JSON.stringify(userData));
            setLoading(false)
            userfunc({
                fullname: res.data.fullname, 
                token: res.data.token, 
                email: res.data.email, 
                userId: res.data.userId,
                totalBalance: res.data.totalBalance
            })
            router.replace("/util/verifyEmail")
        } catch(err: any) {
            setLoading(false)
            console.log("Error Side", err.response.data)
            setEmail("")
            setPassword("")
            setFullname("")
            setError(err.response.data)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.view} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.view}>
                    {error && <Error error={error} clicked={() => setError(undefined)} />}
                    {error && <Backdrop />}
                    <View style={{backgroundColor: "#fff"}}>
                        <AppLogo />
                    </View>
                    <Spinner visible={loading} />     
                    <View style={styles.authBorder}>
                        <View style={{paddingTop: 30, alignItems: "center", justifyContent: "center"}}>
                            {!isSignup && <Text style={styles.authText}>Login Screen</Text>}
                            {isSignup && <Text style={styles.authText}>Create An Account</Text>}
                        </View>
                        <TextInput style={styles.textInput} keyboardType='email-address'
                            defaultValue={email} placeholder='Enter Email' 
                            onChangeText={(text) => setEmail(text)} autoCapitalize='none'
                            placeholderTextColor={Platform.OS === "ios" ? "#585454" : "#585454"} />

                        {isSignup && <TextInput style={styles.textInput} keyboardType="email-address"
                            defaultValue={fullname} placeholder='Full Name' 
                            onChangeText={(text) => setFullname(text)} autoCapitalize='words'
                            placeholderTextColor={Platform.OS === "ios" ? "#585454" : "#585454"} />}

                        {isEmailEmpty && <Text style={styles.textEmpty}>Email cannot be empty</Text>}
                        <View style={styles.textInputView}>
                            <TextInput secureTextEntry={showPassword} onChangeText={(text) => setPassword(text)}
                                defaultValue={password} placeholder='Enter Password' 
                                style={{paddingLeft: 15}} autoCapitalize="none"
                                placeholderTextColor={Platform.OS === "ios" ? "#585454" : "#585454"} />
                            {showPassword && <Ionicons name="eye-off" size={20} color="black" 
                                onPress={() => setShowPassword(false)} />}
                            {!showPassword && <Ionicons name="eye" size={20} color="black" 
                                onPress={() => setShowPassword(true)}/>}
                        </View>
                        {isPasswordEmpty && <Text style={styles.textEmpty}>Password cannot be empty</Text>}
                        {!isSignup && <Link href="/">Forgot Password?</Link>}
                        
                        {isSignup && <TouchableOpacity style={styles.touchableOpacityContainer} onPress={signupHandler}>
                            <Text style={styles.button}>Create Account</Text> 
                        </TouchableOpacity>}
                        {!isSignup && <TouchableOpacity style={styles.touchableOpacityContainer} onPress={loginHandler}>
                            <Text style={styles.button}>Sign In</Text>
                        </TouchableOpacity>}
                        <View style={styles.textBtn}>
                            {isSignup && <View style={{flexDirection: "row"}}>
                                <Text style={{fontSize: 15, fontWeight: "300"}}>I have an account? </Text>
                                <Text onPress={toggleAuthPage} style={styles.text}>Signin</Text>
                            </View>}
                            {!isSignup && <View style={{flexDirection: "row"}}>
                                <Text style={{fontSize: 15, fontWeight: "300"}}>Dont have an account yet? </Text>
                                <Text onPress={toggleAuthPage} style={styles.text}>Create one</Text>
                            </View>}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    spinnerText: {
        color: "purple"
    },
    authText: {
        fontSize: 18, fontWeight: "bold", color: "purple" 
    },
    textInput: {
        width: Platform.OS === "android" ? 330 : 380,
        // padding: Platform.OS === "ios" ? 20 : 12,
        paddingTop: Platform.OS === "android" ? 13 : 20,
        paddingBottom: Platform.OS === "android" ? 13 : 20,
        paddingLeft: Platform.OS === "android" ? 15 : 15,
        borderWidth: Platform.OS === "android" ? 0.5 : 0,
        borderColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.2)" : "#eee",
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: Platform.OS === "ios" ? "#eee" : "#eee"
    },
    textEmpty: {
        color: "red",
        fontSize: 11
    },
    view: {
        flex: Platform.OS === "ios" ? 1 : 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#fff"
    },
    authBorder: {
        paddingTop: 12,
        paddingBottom: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    textInputView: {
        alignItems: "center",
        flexDirection: "row",
        // borderWidth: 2,
        justifyContent: "space-between",
        borderRadius: 8,
        backgroundColor: "#eee",
        marginTop: 30,
        marginBottom: 10,
        paddingRight: Platform.OS === "ios" ? 15 : 10,
        paddingTop: Platform.OS === "ios" ? 18 : 5,
        paddingBottom: Platform.OS === "ios" ? 18 : 5,
        borderColor: Platform.OS === "android" ? "rgba(0, 0, 0, 0.2)" : "#ccc"
    },    
    touchableOpacityContainer: {
        height: 45,
        borderRadius: 8,
        justifyContent: "center",
        marginTop: 30,
        borderColor: "purple",
        backgroundColor: "purple"
    },
    button: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "900",
        fontSize: 15,
    },
    textBtn: {
        marginTop: 20,
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 10
    },
    text: {
        fontSize: 15, 
        fontWeight: Platform.OS === "ios" ? "700" : "500"
    }
})