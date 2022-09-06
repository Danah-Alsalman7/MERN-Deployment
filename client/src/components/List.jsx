import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

const List = (props) => {

    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/api/players/delete/" + id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>Pirate Crew</h1>
            <Link to={"/new"}>Add Pirate</Link>
            {

                props.players.map((player, i) => {
                    return (

                        <div>
                            <h1 key={i}>{player.name}</h1>
                            <div>
                                <img src={player.image} alt="" />
                                
                            </div>
                            <button>
                                <Link to={"/player/" + player._id}>View Pirate</Link>
                            </button>
                            <button onClick={() => { handleDelete(player._id) }}>Walk the Plank</button>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default List;