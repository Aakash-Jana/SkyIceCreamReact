// This is the topmost widget 
// we will use the items and dynamically add them to the flex box 
// the backend needs to implement listview to handle ajax requests from this file 
// we need to tap into the potentials of the pandemic
// 
import React, { Component } from 'react';
import Item from './item';
import axios from 'axios';
import './menu.css';

class Menu extends Component {
    state = { 
        items : []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/items')
        .then(res=>{
            this.setState({items:res.data})
        }).catch(err=>console.log(`Django Server not started ${err}`));
    }
    render() { 
        return ( 
            <section className="text-gray-700 body-font">
                <div className="cart-details">
                    <div className="child">
                        <img alt="" height="20px" src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" />
                    </div>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {this.state.items.map(icecream=><Item name={icecream.name} price={icecream.price} pic={icecream.pic} />)}
                        {/* pic={icecream.pic}  */}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Menu;

// import React, { Component } from 'react';
// import axios from 'axios';

// class Tinker extends Component {
//     state = { 
//         items : []
//     }
//     componentDidMount(){
//         axios.get('http://127.0.0.1:8000/items')
//         .then(res=>{
//             console.log(res);
//             this.setState({items:res.data})
//         }).catch(err=>console.log(err));
//     }
//     render(){ 
//         return ( 
//             <div>
//                 {this.state.items.map(item=><h1 key={item.id}>Item name : {item.name}</h1>)}
//             </div>
//         );
//     }
// }
 
// export default Tinker;