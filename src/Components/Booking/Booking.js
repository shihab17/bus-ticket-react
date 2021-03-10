import React from 'react';
import { useParams } from 'react-router';
import Seats from '../Seats/Seats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faChair } from '@fortawesome/free-solid-svg-icons'
const Booking = (props) => {
    const { id } = useParams();
    const data = props.data;
    const bookId = id;
    const result = data.find(({ id }) => id == `${bookId}`);
    console.log(result)
    return (
        <div className="container">
            <div className="row booking">
                <div className="col-lg-6">
                    <Seats data={result}></Seats>
                </div>
                <div className="col-lg-6">
                    <h1>This is Booking part {id}</h1>
                    <h3>{result.sourceCity}</h3>
                    <FontAwesomeIcon icon={faChair} />
                </div>

            </div>
        </div>

    );
};

export default Booking;