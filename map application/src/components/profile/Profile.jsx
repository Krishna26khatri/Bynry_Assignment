import React,{useContext} from 'react'
import {UserContext} from '../UserContext'

function Profile() {
    const {userList} =useContext(UserContext)
    return (
        <div className="p-4">
            <div className="text-center text-bold text-2xl mb-6 text-blue-800">
                All User's Profiles
            </div>
        </div>
    );
}


export default Profile
