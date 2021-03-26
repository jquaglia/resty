import React from 'react';
import './history-page.scss';
import History from '../history/History.js';

export default function HistoryPage(props) {
  return (
    <div>
      <h2>This is the history page.</h2>
      <History history={props.data.history} />
    </div>
  );
}