import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null
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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerViewStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerViewStyle: {
    alignSelf: 'center'
  }
});

export default App;
