import React from "react";
import './Schedule.css';

function Schedule() {
    return (
        <section style={{marginLeft: '0%', marginRight: '0%'}}>
        <table id={'scheduleTable'}>
            <thead>
                <th>Location</th>
                <th>Coordinator</th>
                <th>Hours</th>
            </thead>
            <tr>
                <td>1408 S Madison St, Normal, Illinois(IL), 61761</td>
                <td>Wendy Smith</td>
                <td>9-5pm EST</td>
            </tr>
            <tr>
                <td>7 Temple St, Cambridge, Massachusetts(MA), 02199</td>
                <td>Rowland McDonald</td>
                <td>8-7pm MST</td>
            </tr>
            <tr>
                <td>161 West St, Big Pine, California(CA), 93513</td>
                <td>Ronald King</td>
                <td>10-4pm MT</td>
            </tr>
        </table>
        </section>
    );
}

export default Schedule;