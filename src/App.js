import React from 'react';
import { render } from 'react-dom';
import './app.css';

import Covfefe from './Covfefe';

const App = () => {
  return(
    <div>
      <Covfefe />
        <p>
          Credit to <a href='https://codegolf.stackexchange.com/questions/123685/covfefify-a-string'>this thread</a> from the <a href='codegolf.stackoverflow.com'>codegolf</a> section of stackoverflow for the regex to covfefiy a string.
        </p>
        <ul>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Parcel</li>
        </ul>
        <p>
          Open Source is awesome, even if our president sucks.
        </p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
