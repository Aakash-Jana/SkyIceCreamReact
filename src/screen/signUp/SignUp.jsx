import React, { Component } from 'react';
// We need to handle session based csrf_token from django-rest-framework

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            addr1 :'',
            addr2:'',
            city:'',
            county:'',
            zip:0
        };
    }
    handleChange = (event) => { 
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
        [name]: value
        });
    } 
    handleSubmit = (event) => {
        // send ajax POST request to server for user creation
        event.preventDefault();
    }
    render() { 
        return ( 
            <div className="container my-4">
                <form  onSubmit={this.handleSubmit}>
                {/* action="/create-account"  method="POST" */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} name="email" id="inputEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name="password" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" value={this.state.addr1} onChange={this.handleChange}  name="addr1" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" value={this.state.addr2} onChange={this.handleChange}  name="addr2" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleChange}  className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" name="county" value={this.state.county} onChange={this.handleChange} className="form-control">
                        <option selected>Choose...</option>
                        <option>West Bengal</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Pincode</label>
                        <input type="text" className="form-control" value={this.state.zip} onChange={this.handleChange} name="zip" id="inputZip"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" name="checked" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Remember me
                    </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }
}
 
export default SignUp;