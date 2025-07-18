import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { HeaderBackground } from '@react-navigation/elements';
import { getBackgroundColorAsync } from 'expo-system-ui';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen option={{ title: 'Oops! Not Found' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go back to Home Screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});