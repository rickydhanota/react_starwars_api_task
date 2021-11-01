import React, {useState, useEffect} from 'react';
import { navigate } from '@reach/router';

const Form = (props) => {

    const [category, setCategory] = useState("");
    const [id, setID] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return (
        <div>

            <h1>Star Wars API Assignment</h1>
            <form onSubmit = {handleSubmit}>
                <select onChange = {(e) => setCategory(e.target.value)}>
                    <option value = "blank">-------</option>
                    <option value = "people">People</option>
                    <option value = "planets">Planets</option>
                </select>
                <label htmlFor ="id">ID:</label>
                <input type = "text" name="id" onChange = {(e) => setID(e.target.value)}></input>
                <button>Submit</button>
            </form>
            
        </div>
    );
};


export default Form;