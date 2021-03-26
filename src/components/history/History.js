import React from 'react';
import './history.scss';


export default function History(props) {

  return (
    <>
      <ul>
        {props.history.map((item, index) =>
          <li key={index}>
            <span className={`method ${item.method}`}>{item.method}</span>
            <button className='url-history'>{`${item.url}`}</button>
          </li>,
        )}
      </ul>
    </>
  );
}
