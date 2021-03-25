
import React from 'react';
import './results.scss';


import JSONPretty from 'react-json-pretty';


export default function Results(props) {
  if (props.show) {
    return (
      <article>
        {/* <p>count:<JSONPretty id="json-pretty" data={props.data.count}></JSONPretty></p> */}
        {/* <p>headers:<JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></p> */}

        <ul>
          <li>headers:<JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></li>
          <li>results:</li>
          <li><JSONPretty id="json-pretty" data={props.data.body}></JSONPretty></li>
        </ul>
      </article>
    );
  } else {
    return null;
  }
}
