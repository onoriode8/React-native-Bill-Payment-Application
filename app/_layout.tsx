import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
        <Stack.Screen name="index" options={{title: ""}}/>
        <Stack.Screen name="login" options={{ title: "Login"}} />
        <Stack.Screen name="addmoney" options={{ title: "Add Money" }} />
    </Stack>;
}
