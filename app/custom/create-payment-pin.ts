import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

import { PROD_API_URL } from '../config'
import AuthContext from '../hooks/context'


export const useCreatePaymentPin = () => {
    const [newPaymentPin, setNewPaymentPin] = useState<number[]>([]);

    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const [newPaymentPinMessage, setnewPaymentPinMessage] = useState<string>("")

    const { userPersonalData, dispatchPath } = useContext(AuthContext)

    useEffect(() => {
        dispatchPath("")
    }, [])

    const sendPaymentPinHandler = async () => {
        const isPaymentPinSet = true
        await AsyncStorage.setItem("userData", JSON.stringify(isPaymentPinSet));

        const extractedPin = newPaymentPin.join("")
        const formattedExtractedPin = extractedPin.replace(/,/g, '')
        const parsedExtractedPinToNumber = Number(extractedPin.replace(/,/g, ''))

        if(formattedExtractedPin.length === 0) {
            setnewPaymentPinMessage("Pin must contain a value.")
            setTimeout(() => {
                setnewPaymentPinMessage("")
            }, 3000)
            return 
        }
        if(formattedExtractedPin.length !== 4) {
            setnewPaymentPinMessage("Pin must be 4 digit number.")
            setTimeout(() => {
                setnewPaymentPinMessage("")
            }, 3000)
            return 
        }
        try {
            setLoading(true)
            const newPaymentPin = parsedExtractedPinToNumber //this path or url below already connected to backend and it passed.
            const response = await axios.patch(`${PROD_API_URL}/user/create/new/payment/pin/${userPersonalData.userId}`, {
                newPaymentPin,
                email: userPersonalData.email
            }, {
                headers: {
                    "Authorization":"Bearer " + userPersonalData.token
                }
            })
            setLoading(false)
            console.log("REPONSE", response.data)
            setnewPaymentPinMessage(response.data.message)
            const data = await AsyncStorage.getItem("userData")
            console.log("DATA FROM ASYNC-STORAGE", data)
            const savedIsPaymentPinSet = data.isPaymentPinSet = response.data.isPaymentPinSet
            console.log("Saved", savedIsPaymentPinSet)
            // set AsyncStorage value to have the updated isPaymentPinSet value => response.data.isPaymentPinSet
        } catch (error) {
            setLoading(false)
            const errorMessage = error.message || "Something went wrong"
            setError(errorMessage)
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

    const handlePress = (num: number) => {
        setNewPaymentPin(prevState => {
            if(prevState.length >= 4) return prevState;
            return [...prevState, num]
        })
    }
    const deleteLastNumber = () => {
        setNewPaymentPin(prevState => prevState.slice(0, -1))
    }

    return { loading, error, newPaymentPinMessage, 
        handlePress, deleteLastNumber, newPaymentPin,
        sendPaymentPinHandler }
}