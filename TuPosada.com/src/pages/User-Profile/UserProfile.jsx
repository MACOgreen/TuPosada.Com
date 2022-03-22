import React, {useState, useEffect, useContext} from 'react';
import './UserProfile.css';
import firebase from 'firebase/app';
import {app} from '../../utils/firebase-config.js';
import { UserContext } from "../../context/UserContext";
import 'firebase/auth';
import 'firebase/database';



function UserProfile() {
    const {user, setUser} = useContext(UserContext);
    const [searchString, setSearchString] = useState();
    const sacar = async ()=>{
        await setUser();
      }
    return (
        <div className='container rounded bg-white mt-5 mb-5'>
            <div className='row'>
                <div className='col-md-3 border-right'>
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <span className='font-weight-bold'>{user.name}</span>
                        <span className="text-black-50">{user.email}</span>
                    </div>
                </div>
                    <div className='col-md-5 border-right'>
                        <div className='p-3 py-5'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h4 className='text-right'>Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className='col-md-6'>
                                    <label className='labels'>Name</label>
                                    <input type="text" className='form-control' placeholder={user.name} value={searchString} />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-12'>
                                    <label className='labels'>Mobile Number</label>
                                    <input type="text" className='form-control' placeholder="enter phone number" value={searchString}/>
                                </div>
                                <div className='col-md-12'>
                                    <label className='labels'>Genero</label>
                                    <input type="text" className='form-control' placeholder="enter gender" value={searchString}/>
                                </div>
                                <div className='col-md-12'>
                                    <label className='labels'>Email</label>
                                    <input type="email" className='form-control' placeholder={user.email} value={searchString}/>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <label className='labels'>Country</label>
                                    <input type="text" className='form-control' value={searchString} placeholder={user.PaisDeOrigen} />
                                </div>
                                <div className='col-md-10'>
                                    <label className='labels'>State/Region</label>
                                    <input type="text" className='form-control' value={searchString} placeholder={user.PaisDeOrigen}/>
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