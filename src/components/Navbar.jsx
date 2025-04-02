import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid ">
          <a className="navbar-brand  badge text-bg-success" href="#">
            <h3>
              <span>NewsMania</span>
            </h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{cursor:"pointer"}}>
                <div className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </div>
              </li>
              <li className="nav-item" style={{cursor:"pointer"}}>
                <div
                  className="nav-link"
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>
              <li className="nav-item" style={{cursor:"pointer"}}>
                <div className="nav-link" onClick={() => setCategory("sport")}>
                  Sport
                </div>
              </li>
              <li className="nav-item" style={{cursor:"pointer"}}>
                <div
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item" style={{cursor:"pointer"}}>
                <div
                  className="nav-link"
                  onClick={() => setCategory("general")}
                >
                  Genral
                </div>
              </li>
              <li className="nav-item" style={{cursor:"pointer"}}>
                <div
                  className="nav-link"
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
