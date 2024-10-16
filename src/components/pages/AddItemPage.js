import React, { useEffect } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Navbar } from "../Navbar";
import './pagesCSS/AddItem.css';


export const AddItemPage = ({ addData, addDataSubmit, msg, setMsg, data }) => {

   useEffect(() => {
    setMsg('');
    
   }, [])
  
// value={select} onChange={e => setSelect(e.target.value)

    return (
        
        <div>
            <Navbar />
            <br /><br /><br />
            <h3 className="title3">Add Items</h3>
            {/* <FloatingLabel
                controlId="floatingInput"
                label="Item ID"
                className="mb-3"
                
            >
                <Form.Control type="email" placeholder="Enter item ID" />
            </FloatingLabel> */}
            <form className="form-container">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Item ID</label>
                    <input type="text" name="id" class="form-control" id="formGroupExampleInput" placeholder="Enter Item ID" value={data.id} onChange={addData}></input>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Item Name</label>
                    <input type="text" name="name" class="form-control" id="formGroupExampleInput" placeholder="Enter Item Name" value={data.name} onChange={addData}></input>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Quantity</label>
                    <input type="number" name="quantity" class="form-control" id="formGroupExampleInput" placeholder="Enter Quantity" value={data.quantity} onChange={addData}></input>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Price</label>
                    <input type="number" name="price" class="form-control" id="formGroupExampleInput" placeholder="Enter Price" value={data.price} onChange={addData}></input>
                </div>
                
                <label for="formGroupExampleInput" class="form-label">Category</label>
                <select name="category" class="form-select" aria-label="Default select example" value={data.category} onChange={addData}>
                    
                    <option selected>Choose Category</option>
                    <option>Clothing</option>
                    <option>Electronics</option>
                    <option>Entertainment</option>
                </select>
                <br />

                <button type="submit" className="btn btn-primary" onClick={addDataSubmit} >Add item</button>
                {msg && <p className="message">{msg}</p>}
            </form>

        </div>
    )


}