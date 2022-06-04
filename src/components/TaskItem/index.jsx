import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function TaskItem({ item, openModal, toggleCompleted }) {
  let markCompletedStyles;
  let textStyles;

  if (item.completed) {
    markCompletedStyles = {
      ...styles.markCompletedButton,
      ...styles.completed,
    };

    textStyles = {
      ...styles.text,
      ...styles.textCompleted,
    };
  } else {
    markCompletedStyles = { ...styles.markCompletedButton };
    textStyles = { ...styles.text };
  }

  return (
    <View key={item.id} style={styles.listItemContainer}>
      <TouchableOpacity
        style={markCompletedStyles}
        onPress={() => toggleCompleted(item.id)}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => openModal(item.id)}
      >
        <Text style={textStyles}>{item.value}</Text>
      </TouchableOpacity>
    </View>
  );
}
