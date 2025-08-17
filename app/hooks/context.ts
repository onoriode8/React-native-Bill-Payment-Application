import { createContext } from "react";


interface UserData {
    email: string,
    token: string,
    userId: string,
    fullname: string,
    totalBalance: number,
    //add other data from server like balance, isMFA, isEmailVerifed and others
}

interface AuthContextProps {
    userPersonalData: UserData,
    userfunc: (args: UserData) => void,
    backgroundColor: boolean,
    authentication: boolean,
    setBackgroundColor: () => void,
    setAuthentication: (args: boolean) => void
}

const AuthContext = createContext<AuthContextProps>({
    userPersonalData: {
        email: "",
        token: "",
        userId: "",
        fullname: "",
        totalBalance: 0.00,
    },
    backgroundColor: false,
    setBackgroundColor: () => {},
    userfunc: () => {},
    authentication: false,
    setAuthentication: () => {}
})

export default AuthContext