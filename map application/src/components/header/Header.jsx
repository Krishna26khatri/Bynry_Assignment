import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className="border-b-4 h-20 flex items-center justify-center space-x-5 font-bold text-lg">
        
        
            <Link to="">Home</Link>
            <Link to="/profile">Profiles</Link>
            <Link to="/admin">Admin</Link>
        
        </div>
    )
}

export default Header
