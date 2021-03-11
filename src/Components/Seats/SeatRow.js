import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChair } from '@fortawesome/free-solid-svg-icons';
import './SeatRow.css'
import { Button } from 'react-bootstrap';
const SeatRow = (props) => {
    // console.log(props)

    const handleSeat = (seat, col) => {
        console.log("Clicked", seat + col)
    }
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <Button variant="light" onClick={() => handleSeat(props.seat, 1)} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>{props.seat}1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" onClick={() => handleSeat(props.seat, 2)} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>{props.seat}2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" onClick={() => handleSeat(props.seat, 3)} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>{props.seat}3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" onClick={() => handleSeat(props.seat, 4)} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>{props.seat}4</p>
                    </Button>

                </div>
            </div>

        </div>
    );
};

export default SeatRow;