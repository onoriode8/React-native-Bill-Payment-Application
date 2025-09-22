import axios from "axios";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { PROD_API_URL } from "../config";
import AuthContext from "../hooks/context";


export const useSendOTP = () => {
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigation = useNavigation<any>();

    const { userPersonalData } = useContext(AuthContext)

    //send otp code to phone number.
    const sendOTPtoPhoneNumber = async() => {
        setIsLoading(true)
        console.log("CLICKED")
        navigation.navigate("verify-phone-number")
        try {
            const response = await axios.get(`${PROD_API_URL}/user/send/otp/phone/${userPersonalData.userId}`, {
                headers: {
                    "Authorization":"Bearer " + userPersonalData.token
                }
            })
            setIsLoading(false)
            console.log("Response after sending code to phone", response.data)
        } catch (error) {
            setIsLoading(false)
            const errorMessage = error.message || "Something went wrong."
            setError(errorMessage)
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

    //send otp code to email address.
    const sendOTPtoEmailAddress = async() => {
        setIsLoading(true)
        console.log("CLICKED")
        navigation.navigate("verify-email-address")
        try {
            const response = await axios.get(`${PROD_API_URL}/user/send/otp/email/${userPersonalData.userId}`, {
                headers: {
                    "Authorization":"Bearer " + userPersonalData.token
                }
            })
            setIsLoading(false)
            console.log("Response after sending code to phone", response.data)
        } catch (error) {
            setIsLoading(false)
            const errorMessage = error.message || "Something went wrong."
            setError(errorMessage)
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

    return { sendOTPtoPhoneNumber, sendOTPtoEmailAddress, error, isLoading }
}