import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";


import "./Layout.css"

const surName = 'Yuliia Sirenko';
const userDetals = surName.split(' ')
    .map(part => part[0].toUpperCase()).join('');

export default function Layout() {

    return (
        <div>
            <span className="home">
                <NavLink to="movies">HOME</NavLink>
                <div className="click">
                    <button> Click</button>
                    <div><label><input name="genres" placeholder="Enter genres"/></label></div>
                </div>
                <div>
                    <h4>Welcome!</h4>
                    <div className="user" title={surName}>{userDetals}</div>
                </div>
            </span>
                <Outlet/>
        </div>
    );
};