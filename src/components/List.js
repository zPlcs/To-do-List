import React from "react";
import { FlatList, Text, Button, Alert } from "react-native";

const List = (dados) => {
  const apagarTask = (id) => {
    Alert.alert("Confirmação", "Deseja realmente deletar esta task?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          console.log("ID deletado:", id);
          dados.setList(dados.list.filter((item) => item.id !== id)); // Remove a task
        },
      },
    ]);
  };

  const render = ({ item }) => {
    return (
      <>
        <Text>Título da task:</Text>
        <Text>{item.taskValue}</Text>
        <Text>Descrição da task:</Text>
        <Text>{item.descTaskValue}</Text>
        <Button
          title="Deletar task"
          id={(i) => {
            i.id;
          }}
          onPress={() => apagarTask(item.id)}
        />
      </>
    );
  };

  return (
    <>
      <FlatList
        data={dados.list}
        keyExtractor={(item) => item.id}
        renderItem={render}
      />
    </>
  );
};

export default List;
