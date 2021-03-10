import React, { useEffect, useState } from 'react';
import SeatRow from './SeatRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
const Seats = (props) => {
    const { fare, totalSeats } = props.data;
    const [toatlSeat, setSeat] = useState(0)
    const handleSeat = (st) => {
        const seatFind = document.getElementById(st);
        seatFind.disabled = true;
        // console.log(seatFind);
        setSeat(toatlSeat + 1);
    }
    console.log(fare, totalSeats)
    return (
        <div className="seats">
            {/* Seat A */}
            <h5>Totale Seat are booked: {toatlSeat}</h5>
            <h3>Total Fare: {fare*toatlSeat}</h3>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1">
                    <Button variant="light">
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <small>Driver</small>
                    </Button>
                </div>


            </div>
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="A1" onClick={() => handleSeat("A1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>A1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="A2" onClick={() => handleSeat("A2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>A2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="A3" onClick={() => handleSeat("A3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>A3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="A4" onClick={() => handleSeat("A4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>A4</p>
                    </Button>

                </div>
            </div>
            {/* Seat B */}
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="B1" onClick={() => handleSeat("B1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>B1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="B2" onClick={() => handleSeat("B2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>B2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="B3" onClick={() => handleSeat("B3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>B3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="B4" onClick={() => handleSeat("B4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>B4</p>
                    </Button>

                </div>
            </div>
            {/* seats C */}
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="C1" onClick={() => handleSeat("C1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>C1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="C2" onClick={() => handleSeat("C2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>C2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="C3" onClick={() => handleSeat("C3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>C3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="C4" onClick={() => handleSeat("C4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>C4</p>
                    </Button>

                </div>
            </div>
            {/* Seat D */}
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="D1" onClick={() => handleSeat("D1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>D1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="D2" onClick={() => handleSeat("D2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>D2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="D3" onClick={() => handleSeat("D3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>D3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="D4" onClick={() => handleSeat("D4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>D4</p>
                    </Button>

                </div>
            </div>
            {/* Seats E */}
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="E1" onClick={() => handleSeat("E1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>E1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="E2" onClick={() => handleSeat("E2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>E2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="E3" onClick={() => handleSeat("E3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>E3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="E4" onClick={() => handleSeat("E4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>E4</p>
                    </Button>

                </div>
            </div>
            {/* Seats F  */}
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="F1" onClick={() => handleSeat("F1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>F1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="F2" onClick={() => handleSeat("F2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>F2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="F3" onClick={() => handleSeat("F3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>F3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="F4" onClick={() => handleSeat("F4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>F4</p>
                    </Button>

                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="G1" onClick={() => handleSeat("G1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>G1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="G2" onClick={() => handleSeat("G2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>G2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="G3" onClick={() => handleSeat("G3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>G3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="G4" onClick={() => handleSeat("G4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>G4</p>
                    </Button>

                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="H1" onClick={() => handleSeat("H1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>H1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="H2" onClick={() => handleSeat("H2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>H2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="H3" onClick={() => handleSeat("H3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>H3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="H4" onClick={() => handleSeat("H4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>H4</p>
                    </Button>

                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="I1" onClick={() => handleSeat("I1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>I1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="I2" onClick={() => handleSeat("I2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>I2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="I3" onClick={() => handleSeat("I3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>I3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="I4" onClick={() => handleSeat("I4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>A4</p>
                    </Button>

                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    <Button variant="light" id="J1" onClick={() => handleSeat("J1")}>
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>J1</p>
                    </Button>
                </div>
                <div className="col-1">
                    <Button variant="light" id="J2" onClick={() => handleSeat("J2")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>J2</p>
                    </Button>

                </div>
                <div className="col-1">

                </div>
                <div className="col-1">
                    <Button variant="light" id="J3" onClick={() => handleSeat("J3")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>J3</p>
                    </Button>

                </div>
                <div className="col-1">
                    <Button variant="light" id="J4" onClick={() => handleSeat("J4")} >
                        <FontAwesomeIcon className="m-2 chair" icon={faChair} size="lg" />
                        <p>J4</p>
                    </Button>

                </div>
            </div>
            {/* <SeatRow seat="A"></SeatRow>
            <SeatRow seat="B"></SeatRow>
            <SeatRow seat="C"></SeatRow>
            <SeatRow seat="D"></SeatRow>
            <SeatRow seat="E"></SeatRow>
            <SeatRow seat="F"></SeatRow>
            <SeatRow seat="G"></SeatRow>
            <SeatRow seat="H"></SeatRow>
            <SeatRow seat="I"></SeatRow>
            <SeatRow seat="J"></SeatRow> */}
        </div>
    );
};

export default Seats;