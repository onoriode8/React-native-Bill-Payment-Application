import { Stack } from "expo-router";
// import { useEffect } from "react";


// function RouteGuard({children} : {children: React.ReactNode}) {
//   const isAuth = false
//   const router = useRouter()
//   useEffect(() => {
//     if(!isAuth) {
//       router.replace("/login") //path => /login
//     }
//   })
//   return <>{children}</>
// }

// export default function RootLayout() {
//   return (
//     <RouteGuard>
//       <Stack>
//           <Stack.Screen name="(tabs)" options={{ headerShown: false  }}/> {/* this will prevent the header from showing on tabs */}
//       </Stack>
//     </RouteGuard>
//   );
// }


export default function RootLayout() {
  return (
    <Stack>
        {/* <Stack.Screen name="index" options={{headerBackVisible: false, headerLeft: () => null, title: "Dashboard"}}/> */}

        <Stack.Screen name="index" options={{ title: "Dashboard"}}/>
        <Stack.Screen name="login" options={{ title: "Login"}} />
        <Stack.Screen name="add-money" options={{ title: "Add Money" }} />
        <Stack.Screen name="support-agent" options={{ title: "Support Contact" }} />
        <Stack.Screen name="notification" options={{ title: "Notification" }} />
        <Stack.Screen name="live-chat" options={{ title: "Live Chat" }} />
        <Stack.Screen name="airtime" options={{ title: "Airtime" }} />
    </Stack>
  );
}