import React, {Fragment} from 'react';
import { render } from 'react-dom';
import UncleJoe from './uncle_joe.jpg';
import './app.css';

import Covfefe from './Covfefe';

const App = () => {
  return(
    <Fragment>
      <Covfefe />
      <img src={UncleJoe}/>
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
    </Fragment>
  );
};

render(<App />, document.getElementById('root'));
