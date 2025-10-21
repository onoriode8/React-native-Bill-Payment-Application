import { createContext } from "react";


interface UserData {
    email: string,
    token: string,
    userId: string,
    isMFA: boolean,
    fullname: string,
    phoneNumber: number,
    totalBalance: number,
    isPaymentPinSet: boolean,
    //add other data from server like balance, isMFA, isEmailVerifed and others
}

interface AuthContextProps {
    userPersonalData: UserData,
    userfunc: (args: UserData) => void,
    backgroundColor: boolean,
    authentication: boolean,
    path: string,
    dispatchPath: (path: string) => void,
    setBackgroundColor: () => void,
    setAuthentication: (args: boolean) => void
}

const AuthContext = createContext<AuthContextProps>({
    userPersonalData: {
        email: "",
        token: "",
        userId: "",
        isMFA: false,
        fullname: "",
        phoneNumber: 0,
        totalBalance: 0.00,
        isPaymentPinSet: false,
    },
    path: "",
    dispatchPath: (path: string) => {},
    backgroundColor: false,
    setBackgroundColor: () => {},
    userfunc: () => {},
    authentication: false,
    setAuthentication: () => {}
})

export default AuthContext