import React from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
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
        <CardSection />
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
