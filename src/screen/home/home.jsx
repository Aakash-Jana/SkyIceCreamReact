import React, {Fragment , Component } from 'react';
import Hero from './hero';
import SignUp from './signUp';
import Review from './review';
import Directions from './directions';

class Home extends Component {
    // receive user data from app.js by login or set details to unknown user
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Hero/>
                <SignUp/>
                <Review/>
                <Directions/>
            </Fragment>
        );
    }
}
 
export default Home;