import React, { Component } from 'react'

export default class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers : []
        }

    }
    componentDidMount(){
        fetch("/api/customers")
        .then((res)=>res.json())
        .then(customers=>this.setState({customers},() =>{
            console.log("Customers fetched",customers);
        }))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
                <h2>Customers</h2>
                <ul className="list-group list-group-flush">
                    {this.state.customers.map(customers =>
                      <li key={customers.id} className='list-group-item'>{customers.firstName}  {customers.lastName}</li>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}
