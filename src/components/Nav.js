import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">User</Link>
            </li>
      </ul>
    );
};
