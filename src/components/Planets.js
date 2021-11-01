import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Planets = props => {
    const {id} = props;
    const [apiData, setAPIData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            setError(false)
            console.log(response.data)
            setAPIData(response.data)
        })
        .catch(error => {
            console.log(error)
            setError(true)
        })
    }, [props])

    if(error === true){
        return(
            <div>
                <img src ="https://media0.giphy.com/media/12Gyz2J1b9SjD2/200w.gif"></img>   
                <p>These are not the droids you're looking for</p>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>This is Planets</h1>
                <h2>Name: {apiData.name}</h2>
                <p>Climate: {apiData.climate}</p>
                <p>Population: {apiData.population}</p>
                <p>Terrain: {apiData.terrain}</p>
                <p>Diameter: {apiData.diameter}</p>
            </div>
        );
    }
};


export default Planets;