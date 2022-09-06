import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'


const UserForm = (props) => {
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConPassword, setConPassword] = useState("");

    const [FnameError, setFnameError] = useState("");
    const [LnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPasswordError, setConPasswordError] = useState("");

    const [error, setError] = useState([])
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/users/new', {
            Fname,
            Lname,
            email,
            password,
            ConPassword,
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
    const onSubmit = e => {
        e.preventDefault();


        axios.post('http://localhost:8000/api/user/', {
            email,
            password,
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

    const handleFname = (e) => {
        if (e.target.value.length < 1) {
            setFnameError("First Name is required")
        }
        else {
            setFnameError("")
        }
        setFname(e.target.value)
    }
    const handleLname = (e) => {
        if (e.target.value.length < 1) {
            setLnameError("Last Name is required")
        }
        else {
            setLnameError("")
        }
        setLname(e.target.value)
    }
    const handleEmail = (e) => {
        if (e.target.value.length < 1) {
            setEmailError("Email is required")
        }
        else {
            setEmailError("")
        }
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        if (e.target.value.length < 1) {
            setPasswordError("Password is required")
        }
        else {
            setPasswordError("")
        }
        setPassword(e.target.value)
    }
    const handleConPassword = (e) => {
        if (password !== ConPassword) {
            setConPasswordError("Passwords must match");
        }
        else {
            setConPasswordError("")
        }
        setConPassword(e.target.value)
    }
    return (
        <>
            <h1>Welcome to Pirate Crew</h1>
            <h3>Register</h3>
            <form onSubmit={onSubmitHandler}>
                {error.map((error, i) => <p key={i}>{error}</p>)}
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFname} value={Fname} />
                    {FnameError}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLname} value={Lname} />
                    {LnameError}
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={handleEmail} value={email} />
                    {emailError}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} value={password} />
                    {passwordError}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConPassword} value={ConPassword} />
                    {conPasswordError}
                </div>
                <input type="submit" value="Register" />
            </form>

            <h3>Login</h3>
            <form onSubmit={onSubmit}>
                {error.map((error, i) => <p key={i}>{error}</p>)}
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={handleEmail} value={email} />
                    {emailError}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} value={password} />
                    {passwordError}
                </div>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default UserForm;