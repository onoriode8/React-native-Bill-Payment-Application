import axios from "axios";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { PROD_API_URL } from "../config";
import AuthContext from "../hooks/context";

export const useSendOTP = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const navigation = useNavigation<any>();

    const { userPersonalData } = useContext(AuthContext)

    const sendOTPtoPhoneNumber = async() => {
        try {
            setLoading(true)
            const response = await axios.get(`${PROD_API_URL}/user/send/otp/phone/${userPersonalData.userId}`, {
                headers: {
                    "Authorization":"Bearer " + userPersonalData.token
                }
            })
            setLoading(false)
            console.log("", response.data)
            navigation.navigate("verify-phone-number")
        } catch (error) {
            setLoading(false)
            const errorMessage = error.message || "Something went wrong."
            setError(errorMessage)
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

    return { sendOTPtoPhoneNumber }
}