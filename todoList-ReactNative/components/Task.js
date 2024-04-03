import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
            <View style={styles.circular}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 5,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#ffee58',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#ffee58',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;
