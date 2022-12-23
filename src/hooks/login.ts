import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { baseUrl } from "./BaseUrl";


function validateEmail(email: string) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
}

const handleLogin = (emailState, passwordState, isErrorState, messageState, tokenState, history) => {
    // const history;
    const [email, setEmail] = emailState;
    const [password, setPassword] = passwordState;
    const [iserror, setIserror] = isErrorState;
    const [message, setMessage] = messageState;
    const [token, setToken] = tokenState;



    if (!email) {
        setMessage("Please enter a valid email");
        setIserror(true);
        return;
    }
    const loginData = {
        email,
        psswd: password
    };
    const url = baseUrl("login");
    const api = axios.create({
        baseURL: `http://localhost:8080`
    });
    console.log(loginData);
    api.post("/login", loginData)
        .then(res => {
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem('token', res.data.token);
            // history.push("/dashboard/" + email);
            // history.push("/acceuil/");
            // history.push("/acceuil/");
        })
        .catch(error => {
            setMessage("Auth failure! Please create an account");
            setIserror(true);
        });
};



export default handleLogin;