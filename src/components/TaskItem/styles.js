import { StyleSheet } from "react-native";
import { variables } from "../../global/globalStyles";

export const styles = StyleSheet.create({
  text: {
    color: "black",
  },

  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
  },

  markCompletedButton: {
    borderWidth: 1,
    borderColor: "#b5b5b5",
    borderRadius: 100,
    height: 18,
    width: 18,
    marginRight: 10,
  },

  completed: {
    backgroundColor: "#b5b5b5",
  },

  textCompleted: {
    textDecorationLine: "line-through",
    color: variables.colorGray,
  },

  itemButton: {
    width: "80%",
  },
});
