import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import List from '../components/List'
const Main = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err => console.error(err))
    }, [players])

    return (
        <>
            <List players={players} />
        </>
    );
}
export default Main;