import * as Device from 'expo-device'
// import DeviceInfo from "react-native-device-info";


const userAgent = () => {
    const osName = Device.osName
    const brand = Device.brand
    const modelName = Device.modelName
    const osVersion = Device.osVersion
    const deviceName = Device.deviceName
        
    return `${osName} ${brand} ${modelName} ${osVersion} ${deviceName}`
}

export default userAgent;