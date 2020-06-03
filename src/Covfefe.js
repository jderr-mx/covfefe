import React, { Component, Fragment, useState } from 'react';
import _ from 'lodash';


const Covfefe = () => {
  const [myText, updateMyText] = useState('Coverage');

  return (
    <Fragment>
      <p>Your Text</p>
      <textarea onChange={e => updateMyText(e.target.value)} defaultValue={myText} />
      <p>Your Text on Covfefe</p>
      <textarea readOnly={true} value={covfefeThis(myText)} />
    </Fragment>
  );
};

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
