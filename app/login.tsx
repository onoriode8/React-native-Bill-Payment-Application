import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { Link, router } from 'expo-router';
import { useContext, useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";
//use react-native-paper for text, theme and button TextInput. after installing the library with npx expo react-native-paper
import Error from "./error/error";
import AuthContext from "./hooks/context";


export default function Login() {
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [fullname, setFullname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [loading, setLoading] = useState<boolean>(false)

    const [error, setError] = useState<string | undefined>()
    const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false)

    const { setAuthentication, userfunc } = useContext(AuthContext)

// Retrieve
// const user = JSON.parse(await AsyncStorage.getItem('user'));
    
    const toggleAuthPage = () => {
        setIsSignup(prevState => !prevState)
    }

    interface UserData {
        email: string,
        token: string,
        userId: string,
        fullname: string,
        totalBalance: number
    }

    const loginHandler = async () => {
        if(email.length === 0) {
            setIsEmailEmpty(true)
        }
        if(password.length === 0) {
            setIsPasswordEmpty(true)
        }
        if(email.length < 10 && password.length < 5 && fullname.length < 5) return
        try {
            setLoading(true)
            const res: UserData  = await axios.post("http://localhost:8080/user/login", {
                email, fullname, password
            })
            console.log("RESPONSE", res)
            const data = {
                isLogin: true,
                data: res
            }
            setLoading(false)
            // setEmail("")
            // setPassword("")
            setAuthentication(true)
            userfunc({
                fullname: res.fullname, 
                token: res.token, 
                email: res.email, 
                userId: res.userId,
                totalBalance: res.totalBalance
            })
        } catch(err: any) {
            setLoading(false)
            console.log(err)
            // setEmail("")
            // setPassword("")
            setError(err)
        }
    }

    // const user = JSON.parse(AsyncStorage.getItem('user').then(res => {
    //     console.log("USER FROM ASYNC-STORAGE", res)
    // }));

    const signupHandler = async () => {
            router.push("/util/verifyEmail")

        // const userData = {
        //     fullname, email
        // }
        // await AsyncStorage.setItem('user', JSON.stringify(userData));
        // const user = JSON.parse(await AsyncStorage.getItem('user'));
        // console.log("USER FROM ASYNC-STORAGE", user)
        if(email.length === 0) {
            setIsEmailEmpty(true)
        }
        if(password.length === 0) {
            setIsPasswordEmpty(true)
        }
        // console.log("MOBILE", email, password, fullname)
        if(email.length < 10 && password.length < 5 && fullname.length < 5) return
        try {
            setLoading(true)
            const res: UserData = await axios.post("http://localhost:7070/user/signup", {
                email, fullname, password
            })
            console.log("RESPONSE", res)
            // setEmail("")
            // setPassword("")
            const data = {
                isLogin: true,
                data: res
            }

            // Save
            // await AsyncStorage.setItem('user', JSON.stringify(userData));
            setLoading(false)
            userfunc({
                fullname: res.fullname, 
                token: res.token, 
                email: res.email, 
                userId: res.userId,
                totalBalance: res.totalBalance
            })
            router.push("/util/verifyEmail")
            // setAuthentication(true)
        } catch(err: any) {
            setLoading(false)
            console.log(err)
            // setEmail("")
            // setPassword("")
            setError(err)
        }
    }

    return (
        <View style={styles.view}>
            {error && <Error clicked={() => setError(undefined)} />}
            <View style={{backgroundColor: "#fff"}}>
                {/* App Logo here later */}
                <Text style={styles.authText}>BillQuick</Text>
            </View>
            <Spinner visible={loading} />
            <View style={styles.authBorder}>
                <View style={{paddingTop: 30, alignItems: "center", justifyContent: "center"}}>
                    {!isSignup && <Text style={styles.authText}>Login Screen</Text>}
                    {isSignup && <Text style={styles.authText}>Create An Account</Text>}
                </View>
                <TextInput style={styles.textInput} keyboardType='email-address'
                    defaultValue={email} placeholder='Enter Email' 
                    onChangeText={(text) => setEmail(text)} //autoCapitalize='none'
                    placeholderTextColor={Platform.OS === "ios" ? "#585454" : "#585454"} />

                {isSignup && <TextInput style={styles.textInput} keyboardType="email-address"
                    defaultValue={fullname} placeholder='Full Name' 
                    onChangeText={(text) => setFullname(text)} //autoCapitalize='none'
                    placeholderTextColor={Platform.OS === "ios" ? "#585454" : "#585454"} />}

                {isEmailEmpty && <Text style={styles.textEmpty}>Email cannot be empty</Text>}
                <View style={styles.textInputView}>
                    <TextInput secureTextEntry={showPassword} onChangeText={(text) => setPassword(text)}
                        defaultValue={password} placeholder='Enter Password' 
                        style={{paddingLeft: 15}}
                        placeholderTextColor={Platform.OS === "ios" ? "#585454" : "#585454"} />
                    {showPassword && <Ionicons name="eye-off" size={20} color="black" 
                        onPress={() => setShowPassword(false)} />}
                    {!showPassword && <Ionicons name="eye" size={20} color="black" 
                        onPress={() => setShowPassword(true)}/>}
                </View>
                {isPasswordEmpty && <Text style={styles.textEmpty}>Password cannot be empty</Text>}
                <Link href="/">Forgot Password?</Link>
                
                {isSignup && <TouchableOpacity style={styles.touchableOpacityContainer} onPress={loginHandler}>
                    <Text style={styles.button} onPress={signupHandler}>Create Account</Text> 
                </TouchableOpacity>}
                {!isSignup && <TouchableOpacity style={styles.touchableOpacityContainer}>
                    <Text style={styles.button} onPress={loginHandler}>Sign In</Text>
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
        // borderWidth: 5,
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