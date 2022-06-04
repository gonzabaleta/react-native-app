import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useState } from "react";
import { variables } from "../../global/globalStyles";

export default function EditTaskModal({
  setModalVisible,
  deleteItem,
  selectedItem,
  updateItem,
}) {
  const [title, setTitle] = useState(selectedItem.value);

  const handleChange = (text) => setTitle(text);

  const handleUpdate = () => {
    updateItem(selectedItem.id, title);
    setModalVisible(false);
  };

  return (
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <TextInput
          value={title}
          onChangeText={handleChange}
          style={styles.title}
          selectionColor={variables.colorPrimary}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleUpdate} style={styles.buttonAccept}>
          <Text style={styles.buttonAcceptText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteItem(selectedItem.id)}
          style={styles.buttonDelete}
        >
          <Text style={styles.buttonDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
