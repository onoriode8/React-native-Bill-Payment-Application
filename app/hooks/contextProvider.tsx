import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useEffect, useState } from "react";

import { PROD_API_URL } from '../config';
import AuthContext from "./context";


interface ContextProviderProps {
    children: React.ReactNode
}

// interface UserData {
//     email: string,
//     token: string,
//     userId: string,
//     fullname: string,
//     totalBalance: number,
// }

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [path, setPath] = useState<string>("")

    const [userData, setUserData] = useState({
        token: "", email: "", userId: "", fullname: "", 
        phoneNumber: 0, isMFA: false,
        totalBalance: 0.00, isPaymentPinSet: false
    })
    const [loading, setLoading] = useState<boolean>(false)

    const [backgroundColor, setBackgroundColor] = useState(false)

    useEffect(() => {
        const extractedUserDataValue = async() => {
            const data = await AsyncStorage.getItem("userData");
            const parsed = JSON.parse(data);
            console.log("RETRIEVED", parsed);
        }
        extractedUserDataValue()
    }, [])

    console.log(auth)
    // useEffect(() => {
    //     if(auth === false) {
    //         router.replace("/login");
    //     }
    // }, [])

    useEffect(() => {
        // if(userData.userId?.length !== 0 && userData.token.length !== 0 && userData.email?.length !== 0) {
        //     return
        // }
        if(auth === false) return
        const fetchUserData = async () => {
            //secureStorage or keyChain storage => will only store sensitive data, like userId and accessToken.
            //const sensitiveData = await SecureStorage("sensitive") //example
            //console.log("FROM SECURE-STORAGE-SENSITIVE", sensitiveData)
            // const data = await AsyncStorage.getItem("userData")
            // console.log("FROM ASYNC-STORAGE", data)
            console.log("53", userData)
            try {
                setLoading(true)
                const res = await axios.get(`${PROD_API_URL}/user/get/personal/data/${userData.userId}`, {
                    headers: {
                        "Authorization": "Bearer " + userData.token
                    }
                })
                console.log("RESPONSE", res)

                // Save
                // await AsyncStorage.setItem('user', JSON.stringify(userData));
                setLoading(false)
                setUserData({
                    fullname: res.data.fullname, 
                    token: res.data.token, 
                    email: res.data.email, 
                    isMFA: res.data.isMFA,
                    userId: res.data.userId,
                    phoneNumber: res.data.phoneNumber,
                    totalBalance: res.data.totalBalance,
                    isPaymentPinSet: res.data.isPaymentPinSet
                })
                // setAuthentication(true)
            } catch(err: any) {
                setLoading(false)
                console.log("ERROR 76 FROM PROVIDER", err.response.data)
                setError(err.response?.data || "Something went wrong")
            }
        }
        fetchUserData()
    }, [userData]) //userData.token, userData.userId, userData
    
    const toggleBackgroundColorHandler = () => {
        setBackgroundColor(prevState => !prevState)
    }

    const loginUserHandler = (args: boolean) => {
        console.log("CLICKED")
        setAuth(args)
    }

    const setUserDataHandler = (args: any) => { //: UserData
        console.log("Data from server", args)
        setUserData(args)
    }

    const dispatchPathHandler = (path: string) => {
        console.log("PATH", path)
        setPath(path)
    }

    return (
        <AuthContext.Provider value={{
            userPersonalData: {
                email: userData.email,
                isMFA: userData.isMFA,
                token: userData.token,
                userId: userData.userId,
                fullname: userData.fullname,
                phoneNumber: userData.phoneNumber,
                totalBalance: userData.totalBalance,
                isPaymentPinSet: userData.isPaymentPinSet
            },
            path: path,
            dispatchPath: dispatchPathHandler,
            backgroundColor: backgroundColor,
            setBackgroundColor: toggleBackgroundColorHandler,
            userfunc: setUserDataHandler,
            authentication: auth,
            setAuthentication: loginUserHandler
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;