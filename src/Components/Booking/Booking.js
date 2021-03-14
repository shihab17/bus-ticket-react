import React from 'react';
import { useHistory, useParams } from 'react-router';
import Seats from '../Seats/Seats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faChair } from '@fortawesome/free-solid-svg-icons';
import './Booking.css';


const Booking = (props) => {
    const { id } = useParams();
    const data = props.data;
    const bookId = id;
    const result = data.find(({ id }) => id == `${bookId}`);
    // console.log(result)
    const busCondition = result.IsAc ? 'AC' : 'Non-Ac';
    // const history = useHistory();
    const history = useHistory();
    const handleBooked = () => {
        console.log("congfirm booked")
        const url = `/confirmTicket`;
        history.push(url);
      }
    return (
        <div className="container">
            
            <div className="row ">
            <div className="col-12 bg-light m-2 booking">
                    <h1>{result.sourceCity} to {result.destinationCity} {result.bus} {result.isAc ? "[AC]" : "[Non-Ac]"}</h1>
                    <h4>DEPARTURE TIME: {result.departureTime}</h4>
                    <h4>Fare:  &#2547; {result.fare} </h4>
                </div>
                <div className="col-12 m-2">
                    <Seats data={result} handleBooked={handleBooked}></Seats>
                </div>
               
            </div>
        </div>

    );
};

export default Booking;