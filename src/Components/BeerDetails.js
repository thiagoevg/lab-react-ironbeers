import React from 'react';
import axios from 'axios';

class BeerDetails extends React.Component {
  state = { beer: {} };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      );
      this.setState({ beer: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="d-flex align-items-center justify-content-center card mb-3">
          <img
            src={this.state.beer.image_url}
            className="img-fluid mt-3"
            style={{ height: 'auto', width: '3rem' }}
            alt={`${this.state.name} picture`}
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.beer.name}</h5>
            <p className="card-text">{this.state.beer.description}</p>
            <p className="card-text">
              <small className="text-muted">
                {this.state.beer.contributed_by}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
