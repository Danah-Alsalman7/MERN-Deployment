import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const Form = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [treasure, setTreasure] = useState("");
    const [pirate, setPirate] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const [nameError, setNameError] = useState(""); 
    // const [positionError, setPositionError] = useState(""); 
    const [imageError, setImageError] = useState(""); 
    const [treasureError, setTreasureError] = useState(""); 
    const [pirateError, setPirateError] = useState(""); 

    const [error, setError] = useState([])
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/players/new', {
            name,
            position,
            pirate,
            treasure,
            pegLeg,
            eyePatch,
            image,
            hookHand
        })
        
            .then(res =>
                history.push("/players")
            )
            .catch(err => {
                const errorObj = err.response.data.errors
                let errorArr = []
                for (const key of Object.keys(errorObj)) {
                    errorArr.push(errorObj[key].message)
                }
                setError(errorArr)
            })
    }
    const handleName = (e) =>{
        if(e.target.value.length < 1){
            setNameError("Name is required")
        }
        else{
            setNameError("")
        }
        setName(e.target.value)
    }

    const handleImage = (e) =>{
        if(e.target.value.length < 1){
            setImageError("Image is required")
        }
        else{
            setImageError("")
        }
        setImage(e.target.value)
    }

    const handleTreasure = (e) =>{
        if(e.target.value.length < 1){
            setTreasureError("Treasure is required")
        }
        else{
            setTreasureError("")
        }
        setTreasure(e.target.value)
    }

    const handlePirate = (e) =>{
        if(e.target.value.length < 1){
            setPirateError("Pirate is required")
        }
        else{
            setPirateError("")
        }
        setPirate(e.target.value)
    }

    return (
        <>
            <h1>Add Pirate</h1>
            <div>
                <Link to={"/players"}>Crew Board</Link>
            </div>
            <form onSubmit={onSubmitHandler}>
                {error.map((error, i) => <p key={i}>{error}</p>)}
                <p>
                    <label>Pirate Name:</label><br />
                    <input type="text" onChange={handleName} value={name}/>
                    {nameError}
                </p>
                <p>
                    <label>Image Url: </label><br />
                    <input type="text" onChange={handleImage} value={image}/>
                    {imageError}
                </p>
                <p>
                    <label># of Treasure Chests:</label><br />
                    <input type="number" onChange={handleTreasure} value={treasure}/>
                    {treasureError}
                </p>
                <p>
                    <label>Pirate Catch Phrases:</label><br />
                    <input type="text" onChange={handlePirate} value={pirate}/>
                    {pirateError}
                </p>
                <p>
                    <label >Crew Position: </label><br />
                    <select onChange={(e)=> setPosition(e.target.value)} value={position}>
                        <option value="Capitan">Capitan</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
    
                </p>
                <p>
                    <input type="checkbox" onChange={e => setPegLeg(e.target.checked)} checked={pegLeg} />
                    Peg Leg
                </p>
                <p>
                    <input type="checkbox" onChange={e => setEyePatch(e.target.checked)} checked={eyePatch} />
                    Eye Patch
                </p>
                <p>
                    <input type="checkbox" onChange={e => setHookHand(e.target.checked)} checked={hookHand} />
                    Hook Hand
                </p>
                <input type="submit" value="Add Pirate" />
            </form>
        </>
    )
}

export default Form;