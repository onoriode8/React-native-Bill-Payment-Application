import { useState, useContext, useEffect } from "react";

import AuthContext from "../hooks/context";
import axios from "axios";
import { PROD_API_URL } from "../config";

export const useChangeAppPassword = () => {
    const [oldAppPassword, setOldAppPassword] = useState<string>("")
    const [newAppPassword, setNewAppPassword] = useState<string>("")
    const [confirmedAppPassword, setConfirmedAppPassword] = useState<string>("")

    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const { userPersonalData, dispatchPath } = useContext(AuthContext)

    useEffect(() => {
        dispatchPath("");
    }, [])

    const setOldAppPasswordHandler = (pin: string) => {
        setOldAppPassword(pin)
    }

    const setNewAppPasswordHandler = (pin: string) => {
        setNewAppPassword(pin)
    }

    const setConfirmedAppPasswordHandler = (pin: string) => {
        setConfirmedAppPassword(pin)
    }

    const resetAppPasswordHandler = async () => {
        try {
            setLoading(true)
            await axios.patch(`${PROD_API_URL}/user/change/app/password/${userPersonalData.userId}`, {
                oldAppPassword, newAppPassword, confirmedAppPassword
            }, {
                headers: {
                    "Authorization": "Bearer "+ userPersonalData.token
                }
            })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            const errorMessage = error.message || "Something went wrong."
            setError(errorMessage)
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

    const resetForgotAppPasswordHandler = async () => {
        try {
            setLoading(true)
            await axios.patch(`${PROD_API_URL}/user/reset/app/password/${userPersonalData.userId}`, {
                newAppPassword, confirmedAppPassword
            }, {
                headers: {
                    "Authorization": "Bearer "+ userPersonalData.token
                }
            })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            const errorMessage = error.message || "Something went wrong."
            setError(errorMessage)
            setTimeout(() => {
                setError("")
            }, 3000)
        }
    }

    return {
        oldAppPassword, newAppPassword, 
        confirmedAppPassword, loading, error,
        resetForgotAppPasswordHandler,
        setOldAppPasswordHandler, setNewAppPasswordHandler,
        setConfirmedAppPasswordHandler, resetAppPasswordHandler
    }
}