import React from 'react';
import './form.scss';


export default function Form(props) {

  async function handleSubmit(e) {
    e.preventDefault();
    const request = await fetch(e.target.url.value);
    const data = await request.json();
    const headers = request.headers;

    // let urlData = data.results.map(data => data);
    props.updateResults(data, headers);
  }
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <span>URL:</span>
        <input className="input-text" type='text' name="url" />
        <button type='submit' >GO!</button>
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

