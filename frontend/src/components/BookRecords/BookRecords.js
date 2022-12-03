import React from 'react'
import "./BookRecords.css"
import {Link} from "react-router-dom"
const BookRecords = () => {
  return (
    <div className='book-record-container'>
        <div className="show-book-btn">
            <button>Show book list</button>

        </div>
      <h1>Book'sRecord</h1>
      <p>view books info</p>
      <div className="book-info">
        <table>
            <tbody>
                <tr>
                <td>1</td>
                <td>Title</td>
                <td>The hunger games</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Author</td>
                <td>The hunger games</td>
                </tr>
                <tr>
                <td>3</td>
                <td>ISBN</td>
                <td>The hunger games</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Publisher</td>
                <td>The hunger games</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Publish Date</td>
                <td>The hunger games</td>
                </tr>
                <tr>
                <td>6</td>
                <td>Description</td>
                <td>politics</td>
                </tr>
            </tbody>
        </table>
        <div className="btns">
            <button className='delete-btn'>Delete Book</button>
            <button className='edit-btn'><Link to="/editbook">edit book</Link></button>
        </div>
      </div>
    </div>
  )
}

export default BookRecords
