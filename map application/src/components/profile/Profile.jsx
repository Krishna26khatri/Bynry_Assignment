import React,{useContext, useState} from 'react'
import {UserContext} from '../UserContext'

function Profile() {
    const {userList} =useContext(UserContext)
    const [searchBoxValue,setSearchBoxValue] = useState('')
    const [filteredData,setFilteredData] = useState(userList)

    const showMap=(e)=>{
    // console.log(e.target.id)
    const n=e.target.id;
    //console.log(userList[n].address)
    const address=userList[n].address
    const encodedAddress = encodeURIComponent(address)
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapUrl); 
    }

    const findUser=(e)=>{
        const name = e.target.value
       // console.log(name)
        setSearchBoxValue(name)
        setFilteredData(userList.filter((user)=>user.name.includes(name)))   
    }

    return (
        <div className="p-4">
            <div className="text-center text-bold text-2xl mb-6 text-blue-800">
                All User's Profiles
                <div className="text-right me-4 "><input type="text" placeholder="Search User by Name" className="border border-gray-600 rounded-xl ps-1 text-sm text-gray-400"  value={searchBoxValue} onChange={findUser}></input></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredData.map((user, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-lg w-72 p-4 cursor-pointer hover:shadow-xl"
                    >
                        <div className="flex justify-center"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fG1Ng6IM_8pByhglBs9k5PnNKXQp8_RyqA&s"/></div>
                        <div className="text-xl font-bold text-blue-700 text-center mb-2">{user.name.charAt(0).toUpperCase()+user.name.slice(1)}</div>
                        <div className="text-gray-700"><div className="font-bold inline">Phone: </div>{user.phone}</div>
                        <div className="text-gray-700"><div className="font-bold inline">Address:</div> {user.address}</div>
                        <div className="text-gray-700"><div className="font-bold inline">Description: </div>{user.description}</div>
                        <div className="text-center"> <button className="bg-yellow-800 p-2 m-2 rounded-xl text-white font-bold" onClick={showMap} id={index}>Summary</button></div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Profile
