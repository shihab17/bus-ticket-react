import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Ticket = (props) => {
    const data = props.data;
    console.log(data)
    const { id, bus, sourceCity, destinationCity, isAc, totalSeats, departureTime ,fare} = data;
  
    const history = useHistory();
    const handleBook = (id) => {
        console.log("Clicked", id)
        const url = `booking/${id}`;
        history.push(url);
    }
    return (
        <div>
            {
                data.map(d => <Card>
                    <Card.Body>
                        <Card.Title>{d.bus}{d.isAc ? "[AC]" : "[Non-Ac]"}</Card.Title>
                        <Card.Text>
                            <p>Starting Point: {d.sourceCity}</p>
                            <p>End Point: {d.destinationCity}</p>
                            <p>Total Seats: {d.totalSeats} </p>
                            <p>DEPARTURE TIME: {d.departureTime} </p>
                            <p>Fare:&#2547; {d.fare} </p>
                        </Card.Text>
                        <Button variant="info" onClick={() => handleBook(d.id)}>Book now</Button>
                    </Card.Body>
                </Card>)
            }

        </div>
    );
};

export default Ticket;