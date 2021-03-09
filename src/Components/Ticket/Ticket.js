import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';

const Ticket = (props) => {
    const data = props.data;
    const { id, bus, sourceCity, destinationCity, isAc,totalSeats,departureTime } = data[0];
    console.log(isAc)
    let condition = "";
    if (isAc === true) {
        condition = " [AC]"
    }
    else {
        condition = "[Non-AC]"
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{bus} {condition}</Card.Title>
                    <Card.Text>
                        <p>Starting Point: {sourceCity}</p>
                        <p>End Point: {destinationCity}</p>
                        <p>Total Seats: {totalSeats} </p>
                        <p>DEPARTURE TIME: {departureTime} </p>
                    </Card.Text>
                    <Button variant="info">Book now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Ticket;