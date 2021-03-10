import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Component } from 'react'
import Select from 'react-select'
import { Link } from "react-router-dom";
import './Home.css';
const Home = (props) => {
    const data = props.data;
    // console.log(props.handleFind)
    const sourceCityOption = [
        data.map(dt => ({ "label": dt.sourceCity, "value": dt.sourceCity })
        )
    ];
    const [sourceCity, setSourceCity] = useState(sourceCityOption.label);
    const handleSourceCity = e => {
        setSourceCity(e.label)
    }
//Destination City 
    const destinationCitys = data.filter(city => city.sourceCity === sourceCity)
    const destinationCityOption = [destinationCitys.map(city =>{
        
        return (            
            {
                "label":city.destinationCity, "value": city.destinationCity
            }
            )
    } 
    )];
    const [destinationCity, setDestinationCity] = useState(destinationCityOption.label);
    const handleDestinationCity = e => {
        setDestinationCity(e.label)
    }
    return (
        <div className="home">
            <div className="col-8 findBus bg-light">   
            {
                <Select options={sourceCityOption[0]} onChange={handleSourceCity} />
            }
            <br/>
            {
                <Select options={destinationCityOption[0]} onChange={handleDestinationCity} />
            }
            <br/>
            <Link className="text-decoration-none" to="/getTicket">
            <Button variant="danger" size="lg" block onClick={() => props.handleFind(sourceCity,destinationCity)} >Find Bus</Button>
            </Link>
{/*             
            <h1>{sourceCity}</h1>
            <h1>{destinationCity}</h1> */}
        </div>
        </div>
        
    );
};

export default Home;