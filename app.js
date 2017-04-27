import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return ( 
            <div>
                <ul>
                    <li><Link to="/user">hai
                        <li><Link to="/user/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        </Link>
                    </li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
