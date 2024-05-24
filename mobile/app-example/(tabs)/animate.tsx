import { HelloWave } from "@/components/HelloWave"
import { ThemedView } from "@/components/ThemedView"

export default function HomeScreen() {
    return (
        <ThemedView className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] min-h-screen flex items-center justify-center">
            <HelloWave />
        </ThemedView>
    )
}