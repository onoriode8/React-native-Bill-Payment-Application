import { SafeAreaView, View } from "react-native";

import { useChangeAppPassword } from '../../custom/reset-app-password'
import ResetAppPasswordComponent from "../../util/reset-data/change-password"


export default function ChangeAppPassword() {
    const { setOldAppPasswordHandler, setNewAppPasswordHandler, 
        loading, serverResponse, setConfirmedAppPasswordHandler, 
        resetAppPasswordHandler } = useChangeAppPassword();

    return (
        <SafeAreaView>
            <View>
                <ResetAppPasswordComponent resetAppPasswordHandler={resetAppPasswordHandler}
                    oldAppPasswordVisible={true} loading={loading} 
                    serverResponse={serverResponse}
                    setOldAppPasswordHandler={setOldAppPasswordHandler}
                    setNewAppPasswordHandler={setNewAppPasswordHandler}
                    setConfirmedAppPasswordHandler={setConfirmedAppPasswordHandler}
                />
            </View>
        </SafeAreaView>
    )
}