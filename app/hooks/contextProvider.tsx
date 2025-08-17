import { useState } from "react";

import AuthContext from "./context";


interface ContextProviderProps {
    children: React.ReactNode
}

interface UserData {
    email: string,
    token: string,
    userId: string,
    fullname: string,
    totalBalance: number,
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<boolean>(false)
    const [userData, setUserData] = useState({
        token: "", email: "", userId: "", fullname: "", 
        totalBalance: 0.00,
    })
    const [backgroundColor, setBackgroundColor] = useState(false)

    console.log(auth)
    
    const toggleBackgroundColorHandler = () => {
        setBackgroundColor(prevState => !prevState)
    }

    const loginUserHandler = (args: boolean) => {
        console.log("CLICKED")
        setAuth(args)
    }

    const setUserDataHandler = (args: UserData) => {
        console.log("Data from server", args)
        setUserData(args)
    }

    return (
        <AuthContext.Provider value={{
            userPersonalData: {
                email: userData.email,
                token: userData.token,
                userId: userData.userId,
                fullname: userData.fullname,
                totalBalance: userData.totalBalance,
            },
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