import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Ты не туда попал</h1>
            <Link to='/about'>вернись</Link>
        </div>
    )
}

export default ErrorPage