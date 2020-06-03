import React, { Component, Fragment } from 'react';
// import { ShareButtons } from 'react-share';
// import UncleJoe from './uncle_joe.jpg';
import _ from 'lodash';


class Covfefe extends Component {

  constructor(props) {
    super(props);
    this.state = { someText: 'Coverage'}
    this.updateCovfefe = this.updateCovfefe.bind(this);
  }

  updateCovfefe(e) {
    e.preventDefault();
    this.setState({ someText: e.target.value});
  }
  render() {
    return(
      <Fragment>
        //<Image src={UncleJoe} />
        <p>Your Text</p>
        <textarea onChange={this.updateCovfefe} defaultValue={this.state.someText} />
        <p>Your Text on Covfefe</p>
        <textarea readOnly="true" value={covfefeThis(this.state.someText)} />
          /**
          <TwitterShareButton url="localhost" title={covfefeThis(this.state.someText)} hashtags={['CovfefeThis!']}>
            <Label as='a' color='blue'>
              <Icon name='twitter' />Tweet
            </Label>
          </TwitterShareButton>
          */
      </Fragment>
    )
  }
}

const f = (s) => {
  let results = s.match`(.*?[aeiouy]+(.)).*?([aeiouy])`;
  if(results === null) {
    return '';
  }
  let [,a,b,c] = results;

  return a+(b=(a="bcdfgszkvtgp")[11-a.search(b)]||b)+c+b+c;
}


const covfefeThis = (text) => {

  let results = text.match(/\S+\s*/g);
  return _
    .chain(results)
    .map((value) => {
      return f(value) || value;
    })
    .reduce((value, v) => {
      if(!value)
        return `${v.trim()}`;
      else
        return `${value} ${v.trim()}`;
    }, '')
    .value();
}

// const { TwitterShareButton } = ShareButtons;

export default Covfefe;
