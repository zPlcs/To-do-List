import React, { useState } from "react";
import { TextInput, Text, Button } from "react-native";
import List from "./List";

const Form = () => {
  const [task, setTask] = useState("");
  const [descTask, setDeskTask] = useState("");
  const [list, setList] = useState([]);

  const criarTask = () => {
    return (
      setList((listaProvisoria) => [
        ...listaProvisoria,
        {
          id: Date.now().toString(),
          taskValue: task,
          descTaskValue: descTask,
        },
      ]),
      setDeskTask(""),
      setTask("")
    );
  };

  return (
    <>
      <Text>Titulo da task:</Text>
      <TextInput onChangeText={setTask} value={task} />
      <Text>Descrição da Task:</Text>
      <TextInput onChangeText={setDeskTask} value={descTask} />
      <Button title="Criar task" onPress={criarTask} />
      <List list={list} setList={setList} />
    </>
  );
};

export default Form;
