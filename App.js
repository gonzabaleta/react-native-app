import { StyleSheet, View } from "react-native";

import ToDoList from "./src/pages/ToDoList";

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
