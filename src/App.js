import React from 'react';
import './app.scss';

import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js';
import History from './components/history/History.js';
import { If, Then, Else } from 'react-if';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      methods: [],
      body: [],
      headers: {},
      history: [],
      count: 0,
      isLoading: false,
      isDataVisible: false,
      error: '',
    };
  }

  toggleMenu = () => {
    this.setState({ isDataVisible: !this.state.isDataVisible });
  }

  updateResults = async (data) => {
    // console.log(data);
    try {
      this.setState({
        urls: [...this.state.urls, data.url],
        methods: [...this.state.methods, data.method],
        isLoading: true,
      });
      // console.log(this.state.urls, this.state.methods);

      const request = await fetch(data.url, {
        method: data.method,
      });

      const response = await request.json();

      if (response) {
        this.toggleMenu();
      }
      
      let dataInstance = {
        url: data.url,
        method: data.method,
        body: response,
      };

      let updateHistory = [...this.state.history, dataInstance];

      localStorage.setItem('doomedToRepeatIt', JSON.stringify(updateHistory));

      await this.setState({
        body: [...this.state.body, response],
        isLoading: false,
        history: updateHistory,
      });
    } catch (error) {
      if (error) {
        this.setState({
          error: error,
        });
      }
      console.log(error);
    }
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('doomedToRepeatIt')) || [];
    this.setState({ history });
  }
  // updateResults = (data, headers, request) => {
  //   // console.log(data.url.value);
  //   this.setState({
  //     // urls: [...this.state.urls, ...data],
  //     body: data.results,
  //     count: data.count,
  //     headers: headers,
  //     urls: [...this.state.urls, request.url.value],
  //     methods: [...this.state.methods, request.method.value],
  //   });
  //   console.log(this.state.urls);
  //   console.log(this.state.methods);
  // }

  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <Form updateResults={this.updateResults} />
        <main>
          <History history={this.state.history} />
          <If condition={this.state.isLoading}>
            <Then>
              <p>Loading...</p>
            </Then>
            <Else>
              <Results show={this.state.isDataVisible} data={this.state} />
            </Else>
          </If>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
