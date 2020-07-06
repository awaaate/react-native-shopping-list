import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = ({ title }) => (
	<View style={styles.header}>
		<Text style={styles.text}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	header: {
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		borderColor: "rgba(0,0,0,0.12)",
		borderBottomWidth: 1,
        marginBottom: 20,
        padding: 10,
	},
	text: {
		textAlign: "center",
		fontWeight: "700",
		fontSize: 20,
	},
});
