import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import Loading from "@/components/Loading";
import { SignIn } from '@/app/screens/SignIn';
import { NativeBaseProvider, StatusBar } from "native-base";

import { THEME } from '@/app/styles/theme'

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })
  return (
    <NativeBaseProvider>
      {!fontsLoaded ? <Loading /> : <SignIn />}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </NativeBaseProvider>
  );
}
