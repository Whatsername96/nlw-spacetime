import { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { styled } from "nativewind";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";

import blurBg from "../src/assets/bg-blur.png";
import Stripes from "../src/assets/stripes.svg";

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold
} from "@expo-google-fonts/roboto";

import {
    BaiJamjuree_700Bold
} from "@expo-google-fonts/bai-jamjuree";

const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
});


export default function Layout() {
    const [isUserAuthenticated, setIsUserAuthenticated]  = useState<null | boolean>(null);

    const StyledStripes = styled(Stripes);

    if (!hasLoadedFonts) {
        return <SplashScreen />
    }

useEffect(() => {
SecureStore.getItemAsync("token").then(token => {
    setIsUserAuthenticated(!!token);
});
}, [])

    return (
        <ImageBackground
            source={blurBg}
            className="relative flex-1 bg-gray-950"
            imageStyle={{ position: 'absolute', left: '-100%' }}
        >
            <StatusBar style="light" translucent />
            <StyledStripes className="absolute left-2" />

            <Stack 
                screenOptions={{ headerShown: false, 
                contentStyle: { backgroundColor: 'transparent' } }} 
            >
                <Stack.Screen name="index" redirect={isUserAuthenticated} />
                <Stack.Screen name="new" />
                <Stack.Screen name="memories" />
            </Stack>
        </ImageBackground>
    )
}
