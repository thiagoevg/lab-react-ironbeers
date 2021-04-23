import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import firstImage from '../assets/beers.png';
import secondImage from '../assets/random-beer.png';
import thirdImage from '../assets/new-beer.png';

class Home extends React.Component {
  componentDidMount = async () => {
    try {
      const resolve = await axios.get();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Link to="/beers" style={{ color: 'black' }}>
          <div className="container">
            <div className="card container">
              <img
                src={firstImage}
                className="card-img-top img-fluid"
                alt="Beers"
              />
              <div className="card-body">
                <h5 className="card-title">All Beers</h5>
                <p className="card-text">
                  Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı
                  bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli
                  'buraya metin gelecek.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/random-beer" style={{ color: 'black' }}>
          <div className="container">
            <div className="card container">
              <img
                src={secondImage}
                className="card-img-top"
                alt="RandomBeer"
              />
              <div className="card-body">
                <h5 className="card-title">Random Beer</h5>
                <p className="card-text">
                  Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak
                  bunların büyük bir çoğunluğu mizah katılarak veya rastgele
                  sözcükler eklenerek değiştirilmişlerdir.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/new-beer" style={{ color: 'black' }}>
          <div className="container">
            <div className="card container">
              <img src={thirdImage} className="card-img-top" alt="newBeer" />
              <div className="card-body">
                <h5 className="card-title">New Beer</h5>
                <p className="card-text">
                  Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                  oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                  edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
