import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './img/logo.png';
import back from './img/back1.png';
import './css/addFeedback.css';



class addFeedback extends Component{

  render() {
    return(
        <div>
            <div className='content'>

                <div className='logo'>
                    <img src = {logo}/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='outer'>
                            <h5>How Can we Help You?</h5>
                            <from>
                                <div className="form-group">
                                    <select required  className="form-control" >
                                        <option>- Please Choose -</option>
                                        <option value = "A">A</option>
                                        <option value = "B">B</option>
                                        <option value = "C">C</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>E-mail :</label>
                                    <input type ="email" required  className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Describe Your Feedback</label>
                                   <textarea required  className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type = "submit" value = "Submit FeedBack" className = "btn" style={{background:'purple',color:'white'}}/>
                                </div>
                            </from>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                          <img src = {back} width="200"/>
                    </div>

                    <p style={{marginLeft:500,marginTop:50,fontWeight:'bold'}}>You Can Rate Our System <a href = "/addRating">Rating</a></p>
                </div>
            </div>
        </div>
    );
  }
}

export default addFeedback;