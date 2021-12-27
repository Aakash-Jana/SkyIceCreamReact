import React, { Component } from 'react';
import ReviewCard from './reviewCard';

class Review extends Component {
    state = { // Execute asynchronous calls to the server to fetch the 3 reviews
        reviews : [
            {
                name : "Aakash",
                content : "The icecreams are super tasty and healthy. I love chocolate and the quality of the chocolate is absolutely fantsastic",
                views : "1.2K"
            },
            {
                name : "Harry",
                content : "I just love their icecreams . I orderred one butterscotch fantasy at 11 in the night and within 20 minutes the deliverred me a wonderful icecream",
                views : "5.7K"
            },
            {
                name : "Aishwarya",
                content : "The most affordable exotic icecream brand ever . I orderred one butterscotch fantasy at 11 in the night and within 20 minutes the deliverred me a wonderful icecream",
                views : "5.7K"
            }
        ]
    }
    // most recent reviews
    // Each user is a json object 
    render() { 
        return ( 
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {/* <ReviewCard user={this.state.reviews[0]}/> */}
                    {this.state.reviews.map(rev => (
                        <ReviewCard user={rev}/>
                    ))}
                </div>
                </div>
            </section>
        );
    }
}
 
export default Review;