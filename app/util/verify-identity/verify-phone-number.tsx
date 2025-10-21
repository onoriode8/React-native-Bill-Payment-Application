import { SafeAreaView, View } from "react-native";

import { useVerifyOTP } from "../../custom/verify-otp";
import BillQuickNumericKeyBoard from "../BillQuick-keyboard/billQuick-numeric-keyboard";
import VerifyOTP from "../verify/verify-otp";
import { useSendOTP } from "../../custom/send-otp";


export default function VerifyPhoneNumber() {
    const { selectedNumber, error, loading, serverResponse,
        handlePress, deleteLastNumber, resendOtpHandler } = useVerifyOTP()
    const { sendOTPtoEmailAddress, isLoading } = useSendOTP();

    return (
        <SafeAreaView>
            <View>
                <VerifyOTP titleMessage="Please enter the OTP that was sent to your phone number" 
                    switchInstead="Switch to Email Address Instead." 
                    switchPath="verify-email-address"
                    clicked={sendOTPtoEmailAddress}
                    contact="09055364280" 
                    serverResponse={serverResponse}
                    resendOtpHandler={resendOtpHandler}
                    selectedNumber={selectedNumber} error={error} 
                    loading={loading === true ? loading : isLoading}
                />
                <BillQuickNumericKeyBoard handlePress={handlePress} deleteLastNumber={deleteLastNumber}/>   
            </View>
        </SafeAreaView>
    )
}