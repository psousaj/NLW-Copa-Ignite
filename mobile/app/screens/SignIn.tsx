import {
    Text,
    Center,
} from 'native-base';

export function SignIn() {
    return (
        <Center
        className="flex-1 justify-center items-center"
        bgColor="gray.900"
      >
        <Text fontSize={24} color="white">
            SignIn
        </Text>
      </Center>
    )
}