import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


import { PROD_API_URL } from '../../config';
import AuthContext from '../../hooks/context';



export default function AddMoney() {
    const [userData, setUserData] = useState();
    const [error, setError] = useState<string>("");
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const isFocused = useIsFocused() //this function return true once, if this page is mounted for the first time

    const { userPersonalData, backgroundColor } = useContext(AuthContext);

    const fetchUserBankDetails = async() => {
        try {
            const response = await axios.get(`${PROD_API_URL}/bank/details/${userPersonalData.token}`,
                {
                    headers: {
                        "Authorization": "Bearer " + userPersonalData.token
                    }
                }
            );
            setUserData(response.data)
            // console.log("DATA FROM AddMoney", userData);
        } catch (error: any) {
            let errorMessage: string;
            if(error.message === "Network Error") {
                errorMessage = "Something went wrong"
                setError(errorMessage)
            }
            errorMessage = error.response.data
            setError(errorMessage)
        }
    }

    useEffect(() => {
        fetchUserBankDetails()
    }, []);

    const onRefresh = useCallback(async() => {
        setRefreshing(true)
        await fetchUserBankDetails()
        setRefreshing(false)
    }, [])

    // const show = backgroundColor ? "#1134" : "#fff"

    return (
        <ScrollView contentContainerStyle={style.container}
            refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            <SafeAreaView style={style.container}>
            <View style={style.wrapperView}>
                <View style={style.bankWrapper}>
                    <View style={style.bankIconWrapper}>
                        <MaterialCommunityIcons name="bank" size={34} color="black" />
                    </View>
                    <View style={style.mobileWrapper}>
                        <Text style={style.bankText}>Bank Transfer</Text>
                        <Text style={style.bankText}>Add money via mobile banking</Text>
                    </View>
                </View>
                <View style={style.accountDetailsBackgroundWrapper}>
                    <Text style={style.accountDetailsText}>Account Details</Text>
                    <View style={style.accountDetailsWrapper}>
                        <View style={style.nameWrapper}>
                            <Text style={style.accountName}>Account Name</Text>
                            <Text style={style.accountName}>Onoriode Umukoro {}</Text>
                        </View>
                        <View style={style.nameWrapper}>
                            <Text style={style.accountName}>Bank</Text>
                            <Text style={style.accountName}>Wema Bank {}</Text>
                        </View>
                    </View>
                    <View style={style.nameWrapper}>
                        <Text style={style.accountName}>Account Number</Text>
                        <View style={style.wrappedNumber}>
                            <Text style={style.accountName}>2449782725 {}</Text>
                            <Feather name="copy" size={20} color="black" style={{marginLeft: 8}} />
                        </View>
                    </View>
                </View>
            </View>
            <Text style={style.errorText}>{error}</Text>
        </SafeAreaView>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    wrapperView: {
        top: 0,
        marginTop: 30,
        position: "absolute",
        marginLeft: 30,
        marginRight: 30,
        alignItems: "flex-start",
        flexDirection: "column",
    },
    bankWrapper: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
        paddingRight: 45, //Platform.OS === "ios" ? 45 : , 
        paddingLeft: 12,
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 20,
        elevation: 5, // Android shadow
        shadowColor: "#000", //ios shadow
        shadowOpacity: 0.2,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 3 },
    },
    bankIconWrapper: {
        borderWidth: 0.5,
        padding: 5,
        marginRight: 13
    },
    mobileWrapper: {
    },
    bankText: {
        fontSize: 17,
        paddingTop: 5
    },
    accountDetailsText: {
        fontSize: 17,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    accountDetailsWrapper: {
        marginTop: 10,
        // alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nameWrapper: {
        paddingTop: 25,
        marginRight: 40
    },
    accountName: {
        fontSize: 17,
        marginTop: 5
    },
    wrappedNumber: {
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    accountDetailsBackgroundWrapper: {
        paddingRight: 12,
        paddingLeft: 12,
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 20,
        elevation: 5, // Android shadow
        shadowColor: "#000", //ios shadow
        shadowOpacity: 0.2,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 3 },
    },
    errorText: {
        color: "red",
        fontSize: 10,
        marginTop: 200,
        fontWeight: "900",
        textAlign: "center",
        // position: "absolute",
        // bottom: 0
    }
})