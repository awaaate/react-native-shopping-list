import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export const ListItem = ({item, deleteItem}) => (
  <TouchableOpacity style={styles.lsitItem}>
    <View style={styles.listItemView}>
      <Text style={styles.listItemtext}>{item.item}</Text>
      <Icon name="remove" size={20} onPress={() => deleteItem(item.id)} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  lsitItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 2,
    borderColor: 'rgba(0,0,0,0.12)',
    borderWidth: 1,
    margin: 5,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemtext: {},
});
