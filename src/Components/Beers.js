import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beers extends React.Component {
  state = { beers: [] };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({ beers: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container mt-3">
        {this.state.beers.map((beer) => {
          return (
            <Link
              to={`/beers/${beer._id}`}
              key={beer._id}
              style={{ color: 'black' }}
            >
              <div
                className="container-fluid card mb-3"
                style={{ maxWidth: '540px' }}
              >
                <div className="row g-0">
                  <div className="d-flex align-items-center justify-content-center col-4">
                    <img
                      src={beer.image_url}
                      alt={`${beer.name} picture`}
                      style={{ height: '8rem' }}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{beer.name}</h5>
                      <p className="card-text">{beer.tagline}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          <strong>Created by: </strong>
                          {beer.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
