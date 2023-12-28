import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textActive: {
    color: '#FFFFFF',
    fontSize: 20,
    padding: 15,
  },
  textPassive: {
    color: '#FFFFFF',
    fontSize: 20,
    padding: 15,
    textDecorationLine: 'line-through',
  },
  container_active: {
    margin: 5,
    backgroundColor: '#7DA453',
    borderRadius: 5,
  },
  container_passive: {
    margin: 5,
    backgroundColor: '#37474F',
    borderRadius: 10,
  },
});
