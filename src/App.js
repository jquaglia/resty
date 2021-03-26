import React from 'react';
import './app.scss';
// import { If, isObjectEmpty } from './components/if/If.js';
import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
// import Results from './components/results/Results.js';
// import History from './components/history/History.js';
import HomePage from './components/home-page/home-page.js';
import HelpPage from './components/help-page/help-page.js';
import HistoryPage from './components/history-page/history-page.js';
// import { If, Then, Else, When } from 'react-if';
import { BrowserRouter, /*Switch, */Route/*, NavLink*/ } from 'react-router-dom';

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
  // https://pokeapi.co/api/v2/pokemon/
  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/">
            <Form updateResults={this.updateResults} />
            <HomePage data={this.state} />
          </Route>
          <Route exact path="/history">
            <HistoryPage data={this.state} />
          </Route>
          <Route exact path="/help" component={HelpPage} />
          {/* <h2>Help</h2> */}
          {/* </Route> */}
          {/* <main> */}
          {/* <History history={this.state.history} /> */}
          {/* <When condition={!this.state.initial}> */}
          {/* <If condition={this.state.isLoading}>
              <Then>
                <p>Loading...</p>
              </Then>
              <Else>
                <Results show={this.state.isDataVisible} data={this.state} />
              </Else>
            </If>
            {/* </When> */}
          {/* </main> */}
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
