import React, {Component} from 'react';

import logo from './img/logo.png';
import maintittle from './img/maintittle.png';
import './css/viewFeedback.css';



class viewFeedback extends Component{

  render() {
    return(
        <div>
                
            <div className='top-nav'>
                <div className='logo'>
                    <img src = {logo}/>
                </div>
                <div className='nav-item'>
                     <ul>
                        <li>
                            <a href = "">Home</a>
                        </li>
                        <li>
                            <a href = "">Offers</a>
                        </li>
                        <li>
                            <a href = "/addFeedback">About Us</a>
                        </li>
                        <li>
                            <a href = "">Contact Us</a>
                        </li>
                     </ul>
                </div>
                <div className='sign-in'>
                     <button>Sign In</button>
                </div>
            </div>

            <div className='main-tittle'>
                <img src ={maintittle} />
            </div>
        </div>
    );
  }
}

export default viewFeedback;