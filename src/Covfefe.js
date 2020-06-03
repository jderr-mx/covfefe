import React, { useState } from 'react';
import _ from 'lodash';
import UncleJoe from './uncle_joe.jpg';

const Covfefe = () => {
  const [myText, updateMyText] = useState('Coverage');

  return (
    <div className="max-w rounded overflow-hidden shadow-lg bg-white mb-4">
      <div className="flex">
        <div className="flex-1 p-4">
          <label className="block text-gray-700">Enter some text to covfefe</label>
          <textarea className="shadow appearance-none border rounded w-full mb-4 h-64 resize-none text-gray-700 p-1" onChange={e => updateMyText(e.target.value)} defaultValue={myText} />
          <div className="h-64 italic text-gray-700">{covfefeThis(myText)}</div>
        </div>
        <div className="flex-1 p-4">
          <img src={UncleJoe}/>
        </div>
      </div>
    </div>
  );
};
//          <label>Your Text on Covfefe</label>
//          <div>{covfefeThis(myText)}</div>

const f = s => {
  let results = s.match`(.*?[aeiouy]+(.)).*?([aeiouy])`;
  if (results === null) {
    return '';
  }
  let [, a, b, c] = results;

  return a + (b = (a = 'bcdfgszkvtgp')[11 - a.search(b)] || b) + c + b + c;
};

const covfefeThis = text => {
  let results = text.match(/\S+\s*/g);
  return _.chain(results)
    .map(value => {
      return f(value) || value;
    })
    .reduce((value, v) => {
      if (!value) return `${v.trim()}`;
      else return `${value} ${v.trim()}`;
    }, '')
    .value();
};

// const { TwitterShareButton } = ShareButtons;

export default Covfefe;
