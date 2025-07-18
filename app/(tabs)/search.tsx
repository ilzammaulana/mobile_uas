import { Text, View, StyleSheet } from "react-native";

export default function serviceScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Search Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333ff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
    },
});