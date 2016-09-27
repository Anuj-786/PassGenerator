import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  template: {
    flex: 1,
    height: 1000,
    backgroundColor: '#0738a9',
  },
  container:  {
    backgroundColor: '#0738a9',
    borderWidth:  1,
    borderColor: '#f0f0f0',
    padding: 10,
    top: 56,
  },
  temp1: {
    height: 200,
    width: 300,
    borderWidth:  1,
    borderColor: '#f0f0f0',
    marginBottom: 10,
    backgroundColor: 'transparent',

  },
  temp2: {
    height: 300,
    width: 200,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  temp: {
    borderWidth: 5,
  },
  card1: {
    flex: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4682b4',
  },
  card2: {
    flex: 1,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#87ceeb',
  },
  line: {
    backgroundColor: 'red',

    // marginHorizontal: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
