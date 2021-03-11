import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Component } from 'react'
import Select from 'react-select'
import { Link } from "react-router-dom";
import './Home.css';
const Home = (props) => {
    const data = props.data;
    // console.log(props.handleFind)
    const sc = data.map(d => d.sourceCity)
    // const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

    let unique = [...new Set(sc)];
    const sourceCityOption = [
        unique.map(dt => ({ "label": dt, "value": dt })
        )
    ];
    const [sourceCity, setSourceCity] = useState(sourceCityOption.label);
    const handleSourceCity = e => {
        setSourceCity(e.label)
    }

    //Destination City 
    const destinationCitys = data.filter(city => city.sourceCity === sourceCity);

    const dc = destinationCitys.map(dt => dt.destinationCity)
    let uniqeData = [...new Set(sc)];
    // console.log(uniqeData)
    const destinationCityOption = [uniqeData.map(city => {

        return (
            {
                "label": city, "value": city
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
                <br />
                {
                    <Select options={destinationCityOption[0]} onChange={handleDestinationCity} />
                }
                <br />
                <Link className="text-decoration-none" to="/getTicket">
                    <Button variant="danger" size="lg" block onClick={() => props.handleFind(sourceCity, destinationCity)} >Find Bus</Button>
                </Link>
                {/*             
            <h1>{sourceCity}</h1>
            <h1>{destinationCity}</h1> */}
            </div>
        </div>

    );
};

export default Home;