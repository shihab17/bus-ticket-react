import React from 'react';
import Ticket from '../Ticket/Ticket';

const GetTicket = (props) => {
    // console.log(props.data)
    const data = props.data;
    // console.log(data)
    // const { id, bus } = props.data[0]
    // const [suma] = data.map(d => d.fare)
    // console.log(id, bus)
    return (
        <div>
            {
                // data.map(d => <Ticket data={data}></Ticket>)
                <Ticket data={data}></Ticket>
            }
            
        </div>
    );
};

export default GetTicket;