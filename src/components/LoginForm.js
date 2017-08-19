import React from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import * as firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false
    };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  onLoginFail() {
    this.setState({ loading: false })
    Alert.alert(
      'Authentication Failed',
      'The username or password you entered is incorrect.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner size="small" />
      );
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    );

  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeHolder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeHolder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   }
// });

export default LoginForm;
