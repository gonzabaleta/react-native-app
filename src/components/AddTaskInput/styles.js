import { StyleSheet } from "react-native";
import { variables } from "../../global/globalStyles";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    marginBottom: 20,
  },

  input: {
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 7,
    width: "77%",
  },

  button: {
    width: "20%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: variables.colorPrimary,
    borderRadius: 100,
    color: "white",
  },

  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
