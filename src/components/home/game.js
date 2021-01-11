import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Game = () => {
    const location = useLocation();
    const gameid = location.pathname.split('/').pop()
    const [pStat, setPStat] = useState(null);
    useEffect(() => {
        const url = 'http://localhost:8000/';
        axios.get(url + 'getcards', { params: { game_id: gameid } })
            .then(res => setPStat(res.data));
    }, [])
    return <div>
        {pStat ?
            <div>
                <h5>Deck No:{pStat.deck_no}</h5>
                <h5>Cards Left:{pStat.cards_left}</h5>
                <table className='table'>
                    <tr>
                        <th>name</th>
                        <th>cards</th>
                        <th>in</th>
                    </tr>
                    <tbody>
                        {pStat.players.map(x => {
                            return <tr>
                                <td>{x.name}</td>
                                <td>{x.cards[0] + "---" + x.cards[1]}</td>
                                <td>{x.in}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            : null}
    </div>

}

export default Game;