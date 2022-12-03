import React from 'react'
import "./EditBook.css"
const EditBook = () => {
  return (
    <div className='add-book-container'>
        <div className="showbooklist"><button>Show book list</button></div>
        <h1>Edit Book</h1>
        <p>Update book info</p>
        <div className="form">
           <label >Title</label>
            <br />
            <input type="text" />
            <br />
            <label >ISBN</label>

            <br />
            <input type="text"  />
            <br />
           <label >Author</label>
            
            <br />
            <input type="text" />
            <br />
            <label >Description</label>

            <br />
            <input type="text" />
            <br />
            <label >Published Date</label>

            <br />
            <input type="text" />
            <br />
            <label >Publisher</label>

            <br />
            <input type="text"/>
            <br />
            <button>Update book</button>



        </div>
    </div>
  )
}

export default EditBook
