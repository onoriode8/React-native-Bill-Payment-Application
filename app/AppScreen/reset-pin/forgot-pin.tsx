import { useEffect } from "react";
import { SafeAreaView, View } from "react-native";

import { useResetPin } from "../../custom/reset-pin";
import ResetPin from "../../util/reset-data/reset-pin";



export default function ForgotPin() {
    const { oldPaymentPinMessage, newPaymentPinMessage, setIsFocused,
        oldPaymentPin, setOldPaymentPinHandler, setNewPaymentPinHandler, 
        newPaymentPin, confirmedPaymentPin, setConfirmedPaymentPinHandler, 
        loading, error, resetPinHandler} = useResetPin()

    useEffect(() => {
        setIsFocused(false)
    }, []);

    return (
        <SafeAreaView>
            <View>
                <ResetPin allowed={false} 
                    oldPaymentPinMessage={oldPaymentPinMessage} 
                    newPaymentPinMessage={newPaymentPinMessage}
                    loading={loading} error={error} 
                    oldPaymentPin={oldPaymentPin} 
                    setOldPaymentPin={setOldPaymentPinHandler} 
                    setNewPaymentPin={setNewPaymentPinHandler} 
                    newPaymentPin={newPaymentPin} 
                    confirmedPaymentPin={confirmedPaymentPin} 
                    setConfirmedPaymentPin={setConfirmedPaymentPinHandler}
                    resetPinHandler={resetPinHandler}
                />
            </View>
        </SafeAreaView>
    )
}