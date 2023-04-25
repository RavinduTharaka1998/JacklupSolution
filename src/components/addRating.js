import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './img/logo.png';
import rate from './img/rate.png';
import './css/addRating.css';



class addFeedback extends Component{

  render() {
    return(
        <div>
            <div className = 'rate-content'>

                <div className='logo'>
                    <img src = {logo}/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-lg-4'>
                          <img src = {rate} width="300"/>
                    </div>
                    <div className='col-lg-8'>
                        <div className='outer'>
                            <h6>What Do You Think</h6>
                            <h6>About Our Service ?</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default addFeedback;