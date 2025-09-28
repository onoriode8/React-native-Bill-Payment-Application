import axios from 'axios'
import { useState, useContext, useEffect } from 'react'

import { PROD_API_URL } from '../config';
import Context from '../hooks/context';


export const useResetPin = () => {
    const [oldPaymentPin, setOldPaymentPin] = useState<string>("");
    const [newPaymentPin, setNewPaymentPin] = useState<string>("");
    const [confirmedPaymentPin, setConfirmedPaymentPin] = useState<string>("")

    const [oldPaymentPinMessage, setoldPaymentPinMessage] = useState<string>("");
    const [newPaymentPinMessage, setnewPaymentPinMessage] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const { userPersonalData, dispatchPath } = useContext(Context)

    useEffect(() => {
        dispatchPath("")
    }, [])
    
    const resetPinHandler = async () => {
        if(isFocused === true) {
            if(oldPaymentPin.length < 4) {
                setoldPaymentPinMessage("Pin must contain 4 digit number.");
                setTimeout(() => {
                    setoldPaymentPinMessage("");
                }, 2000);
                return;
            }
        }
        if(newPaymentPin !== confirmedPaymentPin) {
            setnewPaymentPinMessage("Pin must match.")
            setTimeout(() => {
                setnewPaymentPinMessage("");
            }, 2000);
            return
        }
        if(newPaymentPin.length !== 4 && confirmedPaymentPin.length !== 4) {
            setnewPaymentPinMessage("New Pin must contain 4 digit number.")
            setTimeout(() => {
                setnewPaymentPinMessage("");
            }, 2000);
            return
        }
        setLoading(true);
        try {
            const formattedOldPaymentPin = Number(oldPaymentPin)
            const formattedNewPaymentPin = Number(newPaymentPin)
            const formattedConfirmedPaymentPin = Number(confirmedPaymentPin);
            let response;
            if(isFocused === true) {
                response = await axios.patch(`${PROD_API_URL}/user/change/payment/pin/${userPersonalData.userId}`, {
                    formattedOldPaymentPin, formattedNewPaymentPin, formattedConfirmedPaymentPin
                }, {
                    headers: {
                        "Authorization": "Bearer " + userPersonalData.token
                    }
                })
            } else if(isFocused === false) { // /user/reset/payment/pin route added to backend successfully.
                response = await axios.patch(`${PROD_API_URL}/user/reset/payment/pin/${userPersonalData.userId}`, {
                    formattedNewPaymentPin, formattedConfirmedPaymentPin
                }, {
                    headers: {
                        "Authorization": "Bearer " + userPersonalData.token
                    }
                })
            }
            setOldPaymentPin("") 
            setNewPaymentPin("") 
            setConfirmedPaymentPin("") 
            setnewPaymentPinMessage("")
            setLoading(false);
            setnewPaymentPinMessage(response.data) //from server.
            setTimeout(() => {
                setnewPaymentPinMessage("");
            }, 3000);
        } catch (error) {
            setLoading(false);
            const errorMessage = error.message || "Something went wrong";
            setError(errorMessage)
            setTimeout(() => {
                setError("")
            }, 3000);
        }    
    }

    const setOldPaymentPinHandler = (pin: string) => {
        if(pin.length === 5) return pin;
        setOldPaymentPin(pin)
    }

    const setNewPaymentPinHandler = (pin: string) => {
        if(pin.length === 5) return pin;
        setNewPaymentPin(pin)
    }

    const setConfirmedPaymentPinHandler = (pin: string) => {
        if(pin.length === 5) return pin;
        setConfirmedPaymentPin(pin)
    }

    return { 
        oldPaymentPinMessage, 
        newPaymentPinMessage, loading, setIsFocused,
        oldPaymentPin, setOldPaymentPinHandler, setNewPaymentPinHandler, 
        newPaymentPin, confirmedPaymentPin, setConfirmedPaymentPinHandler,
        error, resetPinHandler  
    }

}