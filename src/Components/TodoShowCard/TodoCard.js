import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./TodoCard.style";

const TodoCard = (props) => {
  const [activeTheme, setActive] = useState(styles.container_active);
  const [textTheme, setTextTheme] = useState(styles.textActive);
  const onClick = () => {
    if (activeTheme === styles.container_active) {
      setActive(styles.container_passive);
      setTextTheme(styles.textPassive);
      props.azalt();
    } else {
      setActive(styles.container_active);
      setTextTheme(styles.textActive);
      props.arttir();
    }
  };

  useEffect(() => {
    console.log("asdsa");
  }, [activeTheme]);

  return (
    <View style={activeTheme}>
      <TouchableOpacity onPress={onClick}>
        <Text style={textTheme}>{props.data.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

// onLongPress={() => props.delete(props.text)}

export default TodoCard;
