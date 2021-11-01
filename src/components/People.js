import React, {useState, useEffect} from 'react';
import axios from 'axios';

const People = (props) => {
    const {id} = props;
    const [apiData, setAPIData] = useState({});
    const [error, setError] = useState(false);
    const [homeworld, setHomeWorld] = useState("");

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            setError(false)
            console.log(response.data)
            setAPIData(response.data)
            axios.get(response.data.homeworld)
            .then((homeworldResponse) => {
                console.log(homeworldResponse.data)
                setHomeWorld(homeworldResponse.data.name)
                console.log(homeworldResponse.data.name)
            })
            .catch( (error) => {
                console.log(error)
            })
        })
        // .then( () => axios.get(apiData.homeworld)
        //     .then((HomeWorldResponse) => {
        //         console.log(HomeWorldResponse.data)
        //         setHomeWorld(HomeWorldResponse.data)
        //     })
        //     .catch((error) => console.log(error))
        // )
        .catch((error) => {
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
                <h1>This is People</h1>
                <h2>Name: {apiData.name}</h2>
                <p>Height: {apiData.height}</p>
                <p>Hair Color: {apiData.hair_color}</p>
                <p>Eye Color: {apiData.eye_color}</p>
                <p>Skin Color: {apiData.skin_color}</p>
                <p>Home World: {homeworld}</p>
            </div>
        );
    }
};


export default People;