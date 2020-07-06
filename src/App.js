import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
} from "react-native";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { AddItem } from "./components/AddItem";

const createId = () =>
    Math.random()
        .toString()
        .substr(2, 9);
const App = () => {
    const [items, setItems] = useState([
        { id: createId(), item: "Milk" },
        { id: createId(), item: "Milk" },
        { id: createId(), item: "Milk" },
        { id: createId(), item: "Milk" },
    ]);
    const deleteItemHandler = (id) => {
        setItems((prevItems) => prevItems.filter((val) => val.id !== id));
    };
    const addItem = (itemToAdd) =>
        setItems((prevState) => [
            { id: createId(), item: itemToAdd },
            ...prevState,
        ]);
    return (
        <View style={styles.container}>
            <Header title={"Shopping List"} />
            <View>
                <AddItem onAddItem={addItem} />
                <FlatList
                    style={styles.list}
                    data={items}
                    renderItem={({ item }) => (
                        <ListItem item={item} deleteItem={deleteItemHandler} />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#607d8b",
    },
    lsit: {
        flex: 1,
    },
});
export default App;
