import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TodoCardInput.style';

const TodoCardInput = props => {
  const [active, setActive] = useState(styles.container_searchButton_passive);
  const [inputValue, setInputValue] = useState('');

  const textControl = text => {
    setInputValue(text);
    props.onChange(text);
    console.log('Card: ' + text.length);
    if (text.length > 0) {
      setActive(styles.container_searchButton_active);
    } else {
      setActive(styles.container_searchButton_passive);
    }
  };

  useEffect(() => {
    if (props.control === true) {
      console.log('Controller true geldi. Text değeri null ayarlandı!');
      setInputValue('');
      setActive(styles.container_searchButton_passive);
    }
  }, [props.control]);

  return (
    <View style={styles.container}>
      <View style={styles.container_input}>
        <TextInput
          style={styles.text_input}
          placeholder="Yapılacak..."
          placeholderTextColor="#808080"
          onChangeText={e => textControl(e)}
          value={inputValue}
          name={'text'}
        />
      </View>
      <View style={active}>
        <TouchableOpacity onPress={() => props.setList()}>
          <Text style={styles.text_button}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoCardInput;
