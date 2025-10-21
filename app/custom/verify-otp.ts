import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';

import { PROD_API_URL } from '../config';
import Context from '../hooks/context';


//use custom hook to verify pin-payment
export const useEnterPaymentPin = () => {
    const [error, setError] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedNumber, setSelectedNumber] = useState<number[]>([])

    const handlePress = (num: number) => {
        setSelectedNumber(prevState => {
            if(prevState.length >= 4) return prevState
            return [...prevState, num]
        })
    }
    
    const deleteLastNumber = () => {
        setSelectedNumber(prevState => prevState.slice(0, -1))
    }

    const navigation = useNavigation<any>();

    const { userPersonalData, path } = useContext(Context)

    useEffect(() => {
        if(selectedNumber.length !== 4) return
        const extractedPin = selectedNumber.join("")
        const formattedExtractedPin = extractedPin.replace(/,/g, '')
        const parsedExtractedPinToNumber = Number(extractedPin.replace(/,/g, ''))
        
        navigation.navigate(path)  //check if change-pin is dispatch to context like other path was.
        // navigation.navigate("change-pin") //
        setLoading(true)
        const verifyPinHandler = async () => {
            try {
                const selectedNumber = parsedExtractedPinToNumber
                // /user/verify/payment/pin/userId route added to backend successfully.
                const response = await axios.post(`${PROD_API_URL}/user/verify/payment/pin/${userPersonalData.userId}`, { //this path or url already connected to backend and it passed.
                    selectedNumber
                }, {
                    headers: {
                        "Authorization": "Bearer " + userPersonalData.token
                    }
                })
                setLoading(false)
                setSelectedNumber(prevState => prevState.slice(0, 0))
                console.log("SERVER RESPONSE", response.data)
                if(response.data.isValid === false) {
                    setIsValid(response.data.isValid) //return isValid boolean value from server after checking against pin.
                    setTimeout(() => {
                        setIsValid(true)
                    }, 3500);
                    return;
                }
                navigation.navigate(path)
            } catch (error: any) {
                setLoading(false)
                if(selectedNumber.length > 0) {
                    setSelectedNumber(prevState => prevState.slice(0, 0))
                }

                if(error.message) {
                    const errorMessage: string = error.message ? error.message : "Something went wrong"
                    setError(errorMessage)
                    setTimeout(() => {
                        setError("")
                    }, 2000);
                }
            }
        }
        verifyPinHandler()
    }, [selectedNumber]);

    return { selectedNumber, handlePress, error, isValid,
        deleteLastNumber, loading, navigation }
}

//use custom hook to verify 6 digits otp.
export const useVerifyOTP = () => {
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedNumber, setSelectedNumber] = useState<number[]>([])

    const [serverResponse, setServerResponse] = useState<string>("");

    const { userPersonalData, path } = useContext(Context);

    const navigation = useNavigation<any>();

    const handlePress = (num: number) => {
        setSelectedNumber(prevState => {
            if(prevState.length >= 6) return prevState
            return [...prevState, num]
        })
    }

    const deleteLastNumber = () => {
        setSelectedNumber(prevState => prevState.slice(0, -1));
    }

    const resendOtpHandler = async () => {
        console.log("CLICKED ON RESEND BUTTON")
        try {
            setLoading(true)
            // /user/resend/otp/userId route added to backend successfully. not added yet
            const response = await axios.post(`${PROD_API_URL}/user/resend/otp/${userPersonalData.userId}`, {
                to: userPersonalData.phoneNumber || userPersonalData.email, //select only one either to email or phonenumber to send to server.
                email: userPersonalData.email
            }, {
                headers: {
                    "Authorization": "Bearer " + userPersonalData.token
                }
            })
            setLoading(false)
            console.log("DATA", response.data);
            setServerResponse(response.data)
            setTimeout(() => {
                setServerResponse("");
            }, 3000)
        } catch (error) {
            setLoading(false)
            const errorMessage = error.message || "Something went wrong"
            setError(errorMessage)
            setTimeout(() => {
                setError("");
            }, 3000)
        }
    }

    useEffect(() => {
        if(selectedNumber.length !== 6) return
        //console.log("PATH SAVED", path)
        //navigation.navigate(path) //"forgot-pin"
        const convertedToString = selectedNumber.join("")
        const formattedToNumber = Number(convertedToString)
        const verifyOTPHandler = async () => {
            try {
                setLoading(true)
                const response = await axios.post(`${PROD_API_URL}/user/verify/identity/otp/${userPersonalData.userId}`, {
                    formattedToNumber,
                    email: userPersonalData.email
                }, {
                    headers: {
                        "Authorization": "Bearer " + userPersonalData.token
                    }
                })
                setLoading(false)
                console.log("RESPONSE", response.data);
                navigation.navigate(path) //"forgot-pin"
            } catch(err) {
                setLoading(false)
                const errorMessage = err.message || "Something went wrong"
                setError(errorMessage)
                setTimeout(() => {
                    setError("")
                }, 3000)
            }
        }
        verifyOTPHandler()
    }, [selectedNumber]);


    return { selectedNumber, error, loading, serverResponse,
        handlePress, deleteLastNumber, resendOtpHandler }
}