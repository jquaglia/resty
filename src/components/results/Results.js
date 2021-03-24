
import React from 'react';
import './results.scss';

import JSONPretty from 'react-json-pretty';


export default function Results(props) {

  return (
    <article>
      <p>count:<JSONPretty id="json-pretty" data={props.data.count}></JSONPretty></p>
      <p>headers:<JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></p>

      <ul>
        <li><JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></li>
        <li>results:</li>
        <li><JSONPretty id="json-pretty" data={props.data.body}></JSONPretty></li>

        {/* {props.data.urls.map((data, index) => <li key={index}>{data.name}</li>)} */}
        {/* </ul> */}
        {/* <ul> */}
        {/* {props.data.urls.map((data, index) => <li key={index}>{data.url}{}</li>)} */}
        {/* {console.log(props.data.urls)} */}
      </ul>
    </article>
  );
}
