import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Detail = () => {
    const [player, setPlayer] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/players/" + id)
            .then(res => setPlayer(res.data))
            .catch(err => console.error(err))
    }, [id])
    return (
        <>
        <div>
        <img src={player.image} alt="" />
        </div>
        <h1>{player.name}</h1>
        <h1>About</h1>
        <h3>Position: {player.position}</h3>
        <h3>Treasure: {player.treasure}</h3>
        <h3>Peg Leg: {player.pegLeg ? 'Yes' : "No"}</h3>
        <h3>Eye Patch: {player.eyePatch ?'Yes' : "No"}</h3>
        <h3>Hook Hand: {player.hookHand ?'Yes' : "No"}</h3>
        </>
    );
}
export default Detail;

