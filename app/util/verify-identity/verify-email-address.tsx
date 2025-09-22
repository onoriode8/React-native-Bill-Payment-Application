import { SafeAreaView, View } from "react-native";

import { useVerifyOTP } from "../../custom/verify-otp";
import BillQuickNumericKeyBoard from "../BillQuick-keyboard/billQuick-numeric-keyboard";
import VerifyOTP from "../verify/verify-otp";



export default function VerifyPhoneNumber() {
    const { selectedNumber, error, loading, handlePress, deleteLastNumber, resendOtpHandler } = useVerifyOTP()
    return (
        <SafeAreaView>
            <View>
                <VerifyOTP titleMessage="Please enter the OTP that was sent to your email address" 
                    switchInstead="Switch to Phone Number Instead." 
                    switchPath="verify-phone-number"
                    contact={"test@gmail.com"} resendOtpHandler={resendOtpHandler}
                    selectedNumber={selectedNumber} error={error} loading={loading}
                />
                <BillQuickNumericKeyBoard handlePress={handlePress} deleteLastNumber={deleteLastNumber}/>   
            </View>
        </SafeAreaView>
    )
}