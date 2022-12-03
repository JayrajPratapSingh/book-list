import React from "react";
import "./Home.css";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="home-container">
      <div className="book-container">
        <div className="header">
          <h1>BookList</h1>
          <button><Link to="/">logout</Link></button>
        </div>
        <div className="add-book">
          <button><Link to="/addbook">add new book</Link></button>
        </div>

        <div className="image-content">
          <Link to="/bookrecords">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          </Link>
          <p className="title">The Hunger Games</p>
          <p className="author">Mono Zeddi</p>
          <p className="type">populer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
