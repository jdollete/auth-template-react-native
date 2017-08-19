import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAwdZWuWZx50vWpUPckkQ5gzJVXdExRqlQ',
      authDomain: 'auth-template-7682c.firebaseapp.com',
      databaseURL: 'https://auth-template-7682c.firebaseio.com',
      projectId: 'auth-template-7682c',
      storageBucket: 'auth-template-7682c.appspot.com',
      messagingSenderId: '296452916027'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

export default App;
