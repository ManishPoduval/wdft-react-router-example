import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Users extends React.Component {

    state = {
        users: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState({
                    users: res.data
                })
            }) 
    }

    render(){
        return (
            <div>
                {
                    this.state.users.map((user, i) => {
                        return (
                            <p key={i}>
                                <Link  to={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                        )
                    })
                }
            </div>    
        )
    }
}