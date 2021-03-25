
import React from 'react';
import './form.scss';

class Form extends React.Component {
  // export default function Form(props) {
  constructor() {
    super();
    // console.log('PROPS', this.props);
    this.state = {
      url: '',
      method: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.setState({
      url: e.target.url.value,
      method: e.target.method.value,
    });

    this.props.updateResults({ ...this.state });


  }

  // 'https://pokeapi.co/api/v2/pokemon/'
  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target.method.value);
  //   await this.setState({ isLoading: true });
  //   const request = await fetch(e.target.url.value, {
  //     method: e.target.method.value,
  //   });
  //   const data = await request.json();
  //   const headers = request.headers;
  //   // console.log(this.props);
  //   // let urlData = data.results.map(data => data);
  //   this.props.updateResults(data, headers, e.target);
  //   await this.setState({ isLoading: false });
  // }



  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <span>URL:</span>
          <input className="input-text" type='text' name="url" />
          <button type='submit'>GO!</button>
          <p></p>
          <div className="ck-button">
            <label>
              <input type="radio" value="GET" name="method" />
              <span>GET</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input type="radio" value="POST" name="method" />
              <span>POST</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input type="radio" value="PUT" name="method" />
              <span>PUT</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input type="radio" value="DELETE" name="method" />
              <span>DELETE</span>
            </label>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;