import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class UserDetail extends React.Component {

    state = {
        user: []
    }

    componentDidMount(){
        console.log(this.props)
        let id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {

                this.setState({
                    user: res.data
                })
            }) 
    }

    render(){
        const {user} = this.state
        return (
            <div>
               <p>Hello User {user.name}</p>
               <p>Contact: {user.email}</p>
            </div>    
        )
    }
}