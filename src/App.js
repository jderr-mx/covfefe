import React from 'react';
import { render } from 'react-dom';
import './app.css';

// import Covfefe from './Covfefe';

const App = () => {
  return <h1>Hello World</h1>;
};
//        <Covfefe/>
//        <p>
//          Credit to <a href='https://codegolf.stackexchange.com/questions/123685/covfefify-a-string' target='_blank'>this thread</a> from the <a href='codegolf.stackoverflow.com'>codegolf</a> section of stackoverflow for the regex to covfefiy a string.
//        </p>
//        <p>
//          Built with <a href='https://github.com/facebookincubator/create-react-app'>create-react-app</a> and <a href='https://react.semantic-ui.com'>semantic-ui-react</a>
//        </p>
//        <p>
//          Open Source is awesome, even if our president is not.
//        </p>

render(<App />, document.getElementById('root'));
