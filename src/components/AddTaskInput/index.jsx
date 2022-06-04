import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useState } from "react";
import { variables } from "../../global/globalStyles";

export default function AddTaskInput({ addItem }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    addItem(text);
    setText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What would you like to do?"
        selectionColor={variables.colorPrimary}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
