import React from 'react';
import './app.scss';

import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // urls: [],
      body: [],
      headers: {},
      count: 0,
    };
  }

  updateResults = (data, headers) => {
    // console.log(data.url.value);
    this.setState({
      // urls: [...this.state.urls, ...data],
      body: data.results,
      count: data.count,
      headers: headers,
    });
  }

  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <Form updateResults={this.updateResults}/>
        <Results data={this.state}/>
        <Footer />
      </div>
    );
  }
}

export default App;
