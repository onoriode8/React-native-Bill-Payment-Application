import { createContext } from "react";


interface AuthContextProps {
    authentication: boolean,
    setAuthentication: (args: boolean) => void
}

const AuthContext = createContext<AuthContextProps>({
    authentication: false,
    setAuthentication: () => {}
})

export default AuthContext