import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component { // class-based Component
    
  
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                <h3>List of Customers:</h3>
                <ul>
                    {
                        this.state.persons.map(person =>
                            <li key={person.id}>{person.name}</li>
                        )
                    }
                </ul>
            </div>
            
        )
    }
}