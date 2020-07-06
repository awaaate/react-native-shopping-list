import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export const AddItem = ({ onAddItem }) => {
    const [text, setText] = useState("");
    const onPressHandler = () => {
        if (text) {
            setText("");
            onAddItem(text);
            Keyboard.dismiss();
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Add item..."
                style={styles.input}
                value={text}
                onChangeText={(a) => setText(a)}
            />
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={onPressHandler}
            >
                <Icon name="plus" size={29} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
    },
    input: {
        height: 50,
        flex: 3,
        marginLeft: 5,
        backgroundColor: "rgba(0,0,0,0.12)",
    },
    btnContainer: {
        flex: 1,
        height: 50,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
    },
    icon: {
        color: "white",
    },
});
