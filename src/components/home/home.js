import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../../App.css';


const Home = () => {
    const url = 'http://localhost:8000/';
    const history = useHistory();

    const [start, setStart] = useState(false);
    const [pcnt, setpcnt] = useState(2)
    const pc = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const Players = () => {
        const uploadPlayers = () => {
            let sdd = document.getElementById('ccard');
            let i = 0;
            let parr = [];
            while (sdd.elements.length > i) {
                parr.push(sdd.elements[i].value);
                i++
            }
            console.log(parr);
            axios.post(url + 'players', { players: parr })
                .then(res => history.push(`/game/${res.data.game_id}`))
        }

        let i = 0;
        let parr = [];
        while (pcnt > i) {
            parr.push(<input id={i} className='form-control' key={i} style={{ margin: '2px' }} type='text'
                placeholder={`Player ${i + 1}`} />)
            i++;
        }

        return <div>
            <form id='ccard' className="form col-md-4">
                {parr.map(x => x)}
                <br></br>
            </form>
            <button className='btn btn-success' type='button' onClick={uploadPlayers}>Start</button>
        </div>
    }

    const GameOptions = () => {
        return <div>
            <br />
            <label htmlFor='ticketNum'>Number of players: </label>
            <select className='form-control col-5' id='player' onChange={(e) => setpcnt(e.target.value)}>
                {pc.map(x => <option key={x} value={x} >{x}</option>)}
            </select>
            {<Players />}
        </div>
    }

    return <div className="App">
        {!start ? <button className="btn btn-primary" onClick={() => setStart((prev) => !prev)}> Start Game </button> : null}
        {start ? <GameOptions /> : null}
    </div>
}

export default Home;