import { StyleSheet } from "react-native";
import { variables } from "../../global/globalStyles";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 150,
    paddingHorizontal: 40,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    width: "100%",
    borderBottomColor: variables.colorGray,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },

  closeIcon: {
    backgroundColor: variables.colorPrimary,
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  closeIconText: {
    color: "white",
    marginTop: -2,
    fontSize: 18,
  },

  buttonsContainer: {
    width: 150,
  },

  buttonAccept: {
    backgroundColor: variables.colorPrimary,
    borderRadius: 100,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },

  buttonAcceptText: {
    color: "white",
    textAlign: "center",
  },

  buttonDelete: {
    width: "100%",
    padding: 10,
  },

  buttonDeleteText: {
    color: variables.colorRed,
    textAlign: "center",
  },
});
