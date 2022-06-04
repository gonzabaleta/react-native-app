import { FlatList, Modal, View } from "react-native";
import { useEffect, useState } from "react";

import AddTaskInput from "../../components/AddTaskInput";
import EditTaskModal from "../../components/EditTaskModal";
import TaskItem from "../../components/TaskItem";
import { styles } from "./styles";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = (text) => {
    setList((currentList) => [
      { id: Math.random(), value: text, completed: false },
      ...currentList,
    ]);
  };

  const renderItem = ({ item }) => (
    <TaskItem
      item={item}
      openModal={openModal}
      toggleCompleted={toggleCompleted}
    />
  );

  const deleteItem = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setSelectedItem({});
    setModalVisible(!modalVisible);
  };

  const openModal = (id) => {
    setSelectedItem(list.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };

  const updateItem = (id, value) => {
    setList((currentList) =>
      currentList.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const toggleCompleted = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    newList.sort((a, b) => Number(a.completed) - Number(b.completed));

    setList(newList);
  };

  return (
    <View style={styles.container}>
      <AddTaskInput addItem={addItem} />

      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal animationType="fade" visible={modalVisible}>
        <EditTaskModal
          setModalVisible={setModalVisible}
          deleteItem={deleteItem}
          selectedItem={selectedItem}
          updateItem={updateItem}
        />
      </Modal>
    </View>
  );
}
