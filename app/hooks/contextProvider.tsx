import { useState } from "react";

import AuthContext from "./context";


interface ContextProviderProps {
    children: React.ReactNode
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<boolean>(false)

    console.log(auth)

    const loginUserHandler = (args: boolean) => {
        console.log("CLICKED")
        setAuth(args)
    }

    return (
        <AuthContext.Provider value={{
            authentication: auth,
            setAuthentication: loginUserHandler
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;