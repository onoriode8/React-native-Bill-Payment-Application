import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { Link } from 'expo-router';
import { useContext, useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Error from "./error/error";
import AuthContext from "./hooks/context";


export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [error, setError] = useState<string | undefined>()
    const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false)

    const { setAuthentication } = useContext(AuthContext)
    

    const loginHandler = async () => {
        if(email.length === 0) {
            setIsEmailEmpty(true)
        }
        if(password.length === 0) {
            setIsPasswordEmpty(true)
        }
        if(email.length < 10 && password.length < 5) return
        try {
            const res = await axios.post("http://localhost:8080/user/login")
            const response = await res.json();
            console.log(response);
            setEmail("")
            setPassword("")
            const data = {
                isLogin: true,
                data: response
            }
            setAuthentication(true)
        } catch(err: any) {
            console.log(err)
            setEmail("")
            setPassword("")
            setError(err)
        }
    }

    return (
        <View style={styles.view}>
            {error && <Error clicked={() => setError(undefined)} />}
            <Text>Login Screen</Text>
            <View>
                <TextInput style={styles.textInput} keyboardType='email-address'
                    defaultValue={email} placeholder='Enter Email' 
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={Platform.OS === "ios" ? "#585454" : "none"} />
                {isEmailEmpty && <Text style={styles.textEmpty}>Email cannot be empty</Text>}
                <View style={styles.textInputView}>
                    <TextInput secureTextEntry={showPassword} onChangeText={(text) => setPassword(text)}
                    defaultValue={password} placeholder='Enter Password' />
                    {showPassword && <Ionicons name="eye-off" size={20} color="black" 
                        onPress={() => setShowPassword(false)} />}
                    {!showPassword && <Ionicons name="eye" size={20} color="black" 
                        onPress={() => setShowPassword(true)}/>}
                </View>
                {isPasswordEmpty && <Text style={styles.textEmpty}>Password cannot be empty</Text>}
                <Link href="/">Forgot Password?</Link>
                
                <TouchableOpacity style={styles.touchableOpacityContainer} onPress={loginHandler}>
                    <Text style={styles.button}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "#ccc",
        width: Platform.OS === "android" ? 330 : 380,
        padding: Platform.OS === "ios" ? 20 : 12,
        borderWidth: Platform.OS === "android" ? 2 : 0,
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: Platform.OS === "ios" ? "rgba(137, 134, 134, 0.2)" : "#ccc"
    },
    textEmpty: {
        color: "red",
        fontSize: 11
    },
    view: {
        // flex: 1,
        marginTop: 100,
        alignItems: "center",
        flexDirection: "column"
    },
    textInputView: {
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 2,
        justifyContent: "space-between",
        borderRadius: 8,
        backgroundColor: "#ccc",
        marginTop: 30,
        marginBottom: 10,
        borderColor: "#ccc",
        paddingRight: 5,
        paddingTop: Platform.OS === "ios" ? 15 : 0,
        paddingBottom: Platform.OS === "ios" ? 15 : 0 
    },    
    touchableOpacityContainer: {
        borderWidth: 2,
        height: 45,
        borderRadius: 8,
        justifyContent: "center",
        marginTop: 30,
        borderColor: "purple",
        backgroundColor: "purple"
    },
    button: {
        textAlign: "center",
        color: "#fff"
    }
})