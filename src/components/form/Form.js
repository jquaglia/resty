import React from 'react';
import './form.scss';
//1) define componenent as a class 2) needs to extend React.Component
class Form extends React.Component {

  // 3) define a constructor, run the super() function to get React powers
  constructor() {
    super();
    // create a state object if needed to manage data the component needs
    this.state = {
      urls: [],
      methods: [],
    };

    // take the special React 'this' that we gained from React.Component and makes sure that is alwaus refers tp react.Component
    // this.addUrl = this.addUrl.bind(this);
  }

  // addPerson() {
  //   this.setState({
  //     people: [...this.state.people, 'Jacob'],
  //     input: '',
  //   });
  // }

  addUrl = () => {
    this.setState({
      urls: [...this.state.urls, this.state.input],
      methods: [...this.state.methods, this.state.banana],
    });
  }

  // Just like before in 201, we still get event that need to be examined to retrieve values.
  handleChange = e => {
    console.log(e);
    // e.preventDefault();
    this.setState({ input: e.target.value });
  }

  handleMethodChange = e => {
    console.log(e.target);
    this.setState({ banana: e.target.value });
  }

  render() {
    return (
      <section>
        {/* {this.state.people.map((person) => <li>{person}</li>)} */}
        <form>
          <span>URL:</span>
          <input onChange={this.handleChange} type='text' value={this.state.input} />
          <button type='button' onClick={this.addUrl}>GO!</button>
          <p></p>
          <div className="ck-button">
            <label>
              <input onChange={this.handleMethodChange} type="radio" value="GET" name="banana" />
              <span>GET</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input onChange={this.handleMethodChange} type="radio" value="POST" name="banana" />
              <span>POST</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input onChange={this.handleMethodChange} type="radio" value="PUT" name="banana" />
              <span>PUT</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input onChange={this.handleMethodChange} type="radio" value="DELETE" name="banana" />
              <span>DELETE</span>
            </label>
          </div>
        </form>

        <article>
          <ul>
            {this.state.methods.map((method) => <li>{method}</li>)}
          </ul>
          <ul>
            {this.state.urls.map((url) => <li>{url}</li>)}
          </ul>
        </article>
      </section>
    );
  }
}

export default Form;