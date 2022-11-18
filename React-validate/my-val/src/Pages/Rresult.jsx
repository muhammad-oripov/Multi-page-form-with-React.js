import React, { useContext } from 'react'
import { AuthContext } from '../Context'


function Rresult() {
    let { name, password, surename } = useContext(AuthContext)
    console.log(name);
    console.log(password);
    console.log(surename);
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
            <ul>
            <h1 className=' text-white text-4xl p-12'>Your Data</h1>
                <li>{name}</li>
                <li>{surename}</li>
                <li>{password}</li>
            </ul>
        </div>
    )
}

export default Rresult
