import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import TodoCard from "./Components/TodoShowCard";
import TodoInput from "./Components/TodoCardInput";

const App = (props) => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  let [count, setCount] = useState(list.length);
  const [say, setSay] = useState(0);
  const [control, setControl] = useState(false);

  const increment = () => {
    console.log("incremet  " + count);
    setCount((count = count + 1));
  };

  const decrement = () => {
    console.log("decrement" + count);
    setCount((count = count - 1));
  };

  const renderListCard = ({ item }) => {
    return (
      <TodoCard data={item} arttir={increment} azalt={decrement} text={text} />
    );
  };

  const changeList = () => {
    if (text.length !== 0) {
      const index = count;
      console.log("ChangeList çalışt");
      setList([...list, { index, text }]);
      setSay(say + 1);
      setCount((count += 1));
      setControl(true);
      setText("");
    } else {
      Alert.alert("Bir task girmelisiniz!");
    }
  };

  const changeText = (text) => {
    console.log("Change Text çalıştı");
    if (text.length >= 1) {
      setControl(false);
    }
    setText(text);
  };

  console.log("Text uzunluj: " + text.length);
  console.log("Liste: " + JSON.stringify(list));
  return (
    <View style={styles.container}>
      <View style={styles.container_headers}>
        <View style={styles.container_header_text}>
          <Text style={styles.title}>Yapılacaklar</Text>
        </View>
        <View>
          <Text style={styles.title}>{count}</Text>
        </View>
      </View>

      <View style={styles.container_list}>
        <FlatList arttir={increment} renderItem={renderListCard} data={list} />
      </View>

      <View style={styles.container_input}>
        <TodoInput
          onChange={changeText}
          setList={changeList}
          size={text.length}
          text={text}
          control={control}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102028",
  },
  title: {
    color: "#F9A500",
    fontWeight: "bold",
    fontSize: 30,
  },
  container_headers: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  container_header_text: {
    flex: 1,
  },
  container_list: {
    flex: 10,
  },
  container_input: {
    flex: 3,
  },
});

export default App;
