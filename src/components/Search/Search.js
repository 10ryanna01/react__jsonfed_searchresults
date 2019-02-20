import React, { Component } from "react";

const API = "https://hn.algolia.com/api/v1/search?query=";

//had to use hackernews's a 3rd party api to generate a JSON response below

const DEFAULT_QUERY = "redux";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;

    return (
      // define wrapper

      <div className="card-columns">
        {hits.map(hit => (
          <div className="card position-relative" key={hit.objectID}>
            <p class="text text__overlay text__price">&pound;price</p>             
            <img
              className="card-img-top position-relative"
              src="https://via.placeholder.com/150"
              alt="Card  cap"
            />
            <div className="card-body">
              <a
                href={hit.url}
                target="_blank"
                rel="noopener noreferrer"
                title={hit.title}
                
              >
                <h5 className="card-title text__limit">{hit.title}</h5>
              </a>
              <p className="card-text text-left">
                <small className="text-muted">vehicleYear</small>
              </p>
              <p className="card-text text-left">
                <small className="text-muted ">vehicleModel</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
