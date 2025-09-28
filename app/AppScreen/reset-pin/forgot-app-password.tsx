import { SafeAreaView, View } from "react-native";

import { useChangeAppPassword } from '../../custom/reset-app-password'
import ResetAppPasswordComponent from "../../util/reset-data/change-password"


export default function ForgotAppPassword() {
    const { setOldAppPasswordHandler, setNewAppPasswordHandler, loading,
        setConfirmedAppPasswordHandler, resetForgotAppPasswordHandler } = useChangeAppPassword();

    return (
        <SafeAreaView>
            <View>
                <ResetAppPasswordComponent resetAppPasswordHandler={resetForgotAppPasswordHandler}
                    oldAppPasswordVisible={false} loading={loading} 
                    setOldAppPasswordHandler={setOldAppPasswordHandler}
                    setNewAppPasswordHandler={setNewAppPasswordHandler}
                    setConfirmedAppPasswordHandler={setConfirmedAppPasswordHandler}
                />
            </View>
        </SafeAreaView>
    )
}