import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react';
import Covfefe from './Covfefe';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Container text>
        <Covfefe/>
        <Message size='large'>
          <p>
            Credit to <a href='https://codegolf.stackexchange.com/questions/123685/covfefify-a-string' target='_blank'>this thread</a> from the <a href='codegolf.stackoverflow.com'>codegolf</a> section of stackoverflow
        for the regex to covfefiy a string.
          </p>
          <p>
            Built with <a href='https://github.com/facebookincubator/create-react-app'>create-react-app</a> and <a href='https://react.semantic-ui.com'>semantic-ui-react</a>
          </p>
          <p>
            Open Source is awesome, even if our president is not.
          </p>
      </Message>
      </Container>
    );
  }
}



export default App;
