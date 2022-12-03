import React from 'react'
import {Link} from "react-router-dom"

import "./Addbook.css"
const Addbook = () => {
  return (
    <div className='add-book-container'>
        <div className="showbooklist"><button><Link to="/home">Show book list</Link></button></div>
        <h1>Add Book</h1>
        <p>create new book</p>
        <div className="form">
            <input type="text" placeholder='Title of the book'/>
            <br />
            <input type="text" placeholder='ISBN' />
            <br />
            <input type="text" placeholder='author'/>
            <br />
            <input type="text" placeholder='describe this book'/>
            <br />
            <input type="text" placeholder='published date'/>
            <br />
            <input type="text" placeholder='publisher of this book'/>
            <br />
            <button><Link to="/home">Show book list</Link></button>
        </div>
    </div>
  )
}

export default Addbook
