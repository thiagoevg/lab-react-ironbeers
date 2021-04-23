import React from 'react';
import { Link } from 'react-router-dom';

function HeaderTag(props) {
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: '#3dc4fc' }}
        >
          <div
            className="container-fluid d-flex justify-content-center"
            style={{ backgroundColor: '#3dc4fc' }}
          >
            <span className="navbar-brand">
              <i
                className="fas fa-home"
                style={{
                  color: 'white',
                  padding: '1rem 0',
                  fontSize: '3rem',
                }}
              ></i>
            </span>
          </div>
        </nav>
      </Link>
    </div>
  );
}

export default HeaderTag;
