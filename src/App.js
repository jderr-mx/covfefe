import React from 'react';
import { render } from 'react-dom';
import './app.css';

import GitHub from './github-brands.svg';
import Covfefe from './Covfefe';

const App = () => {
  return(
    <div className="p-4">
      <Covfefe />
      <p>
        Credit to <a  className='text-blue-800 bold' href='https://codegolf.stackexchange.com/questions/123685/covfefify-a-string'>this thread</a> from the <a class='text-blue-800 bold' href='https://codegolf.stackoverflow.com'>codegolf</a> section of stackoverflow for the regex to covfefiy a string.
      </p>
      <div className='mt-4'>
        <b>Built with:</b>
        <ul className="mb-4">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Parcel</li>
        </ul>
        <b>Repo</b>
        <a href='https://github.com/jderr-mx/covfefe'><img alt="Link to repo" className='w-8 h-8' src={GitHub}/></a>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
