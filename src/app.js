import React from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAwdZWuWZx50vWpUPckkQ5gzJVXdExRqlQ',
      authDomain: 'auth-template-7682c.firebaseapp.com',
      databaseURL: 'https://auth-template-7682c.firebaseio.com',
      projectId: 'auth-template-7682c',
      storageBucket: 'auth-template-7682c.appspot.com',
      messagingSenderId: '296452916027'
    });

    // method if the user is signed in or out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
