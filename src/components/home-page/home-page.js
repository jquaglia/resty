import React from 'react';
import './home-page.scss';
import { If, Then, Else/*, When*/ } from 'react-if';
import Results from '../results/Results.js';
import History from '../history/History.js';


export default function Home(props) {

  return (
    <>
      <main>
        {console.log(props.data)}
        <History history={props.data.history} />
        {/* <When condition={!props.data.initial}> */}
        <If condition={props.data.isLoading}>
          <Then>
            <p>Loading...</p>
          </Then>
          <Else>
            <Results show={props.data.isDataVisible} data={props.data} />
          </Else>
        </If>
        {/* </When> */}
      </main>
    </>
  );
}