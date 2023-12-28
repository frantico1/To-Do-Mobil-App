import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginBottom: 30,
    backgroundColor: '#374750',
    borderRadius: 10,
  },
  container_input: {
    color: '#808080',
    borderBottomWidth: 1,
    borderBottomColor: '#78909C',
    margin: 10,
  },
  container_searchButton_passive: {
    flex: 2,
    backgroundColor: '#808080',
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },
  text_input: {
    alignItems: 'center',
    color: '#808080',
    padding: 5,
    marginLeft: 5,
  },
  text_button: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,
  },
  container_searchButton_active: {
    flex: 2,
    backgroundColor: '#F9A500',
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },
});
