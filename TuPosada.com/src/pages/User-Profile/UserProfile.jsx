import React, {useState, useEffect} from 'react';
import './UserProfile.css';


const Profile = ()  => {
    const [userData, setuserData] = useState([]);
}

function UserProfile() {
    
    return (
        <div className='container rounded bg-white mt-5 mb-5'>
            <div className='row'>
                <div className='col-md-3 border-right'>
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width='150px' src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
                        <span className='font-weight-bold'>Username</span>
                        <span className="text-black-50">example.email@tuposada.com</span>
                    </div>
                </div>
                    <div className='col-md-5 border-right'>
                        <div className='p-3 py-5'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h4 className='text-right'>Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div class='col-md-6'>
                                    <label className='labels'>Name</label>
                                    <input type="text" className='form-control' placeholder='first name' value='' />
                                </div>
                                <div class='col-md-7'>
                                    <label className='labels'>Last Name</label>
                                    <input type="text" className='form-control' placeholder='last name' value='' />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-12'>
                                    <label className='labels'>Mobile Number</label>
                                    <input type="number" className='form-control' placeholder="enter phone number" value=" "/>
                                </div>
                                <div className='col-md-12'>
                                    <label className='labels'>Genero</label>
                                    <input type="text" className='form-control' placeholder="enter gender" value=""/>
                                </div>
                                <div className='col-md-12'>
                                    <label className='labels'>Email</label>
                                    <input type="email" className='form-control' placeholder="example.email@tuposada.com" value=""/>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <label className='labels'>Country</label>
                                    <input type="text" className='form-control' value="" placeholder='country'/>
                                </div>
                                <div className='col-md-10'>
                                    <label className='labels'>State/Region</label>
                                    <input type="text" className='form-control' value="" placeholder='state'/>
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button className='btn btn-primary profile-button' type='button'>Save Profile</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default UserProfile