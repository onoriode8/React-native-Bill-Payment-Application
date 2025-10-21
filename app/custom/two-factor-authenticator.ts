import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { useContext, useState } from "react";

import { PROD_API_URL } from '../config';
import AuthContext from "../hooks/context";



interface TwoFactorAuthenticatorProps {
    isMFAenabled: boolean, 
    loading: boolean, 
    googleAuthCode: number[],
    onChangeSetGoogleAuthCode: Function,
    setTwoFactorAuthHandler: Function
}

const useTwoFactorAuthenticator = (): TwoFactorAuthenticatorProps => {
    const [googleAuthCode, setGoogleAuthCode] = useState<number[]>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const { userPersonalData } = useContext(AuthContext)
    const isMFAenabled = userPersonalData.isMFA

    const navigation = useNavigation<any>()

    const onChangeSetGoogleAuthCode = (num: number) => {
        if(typeof googleAuthCode !== "number") {
            console.log("FROM GOOGLE AUTH", typeof googleAuthCode)
            return
        }
        setGoogleAuthCode(prevState => {
            console.log("Inside set prevState", prevState)
            console.log("Inside set argument num", num)
            if(prevState.length < 6 || prevState.length > 6) {
                return prevState
            }
            return [prevState, ...num]
        })
        
    }

    const setTwoFactorAuthHandler = async(): Promise<void> => {
        if(isMFAenabled === true) {
            return
        }
        setLoading(true)
        navigation.navigate("two-factor-auth") // add to the layout route my battery is low now.
        try {
            const response = await axios.get(`${PROD_API_URL}/user/get/auth/user/secret/${userPersonalData.userId}`, {
                headers: {
                    "Authorization": "Bearer " + userPersonalData.token
                }
            })
            console.log("TWO -FACTOR AUTH HANDLER", response.data)
            setLoading(false)
        } catch(err) {
            setLoading(false)
            const error = err.message || "Something went wrong."
            setError(error)
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

    return { 
        isMFAenabled, 
        loading, 
        setTwoFactorAuthHandler,
        googleAuthCode,
        onChangeSetGoogleAuthCode
    }
}


export default useTwoFactorAuthenticator;