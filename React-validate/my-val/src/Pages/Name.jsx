import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context'

function Name() {
    let [value, setValue] = useState('')
    let { setName, } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setName(value)
    }
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className=' text-white text-4xl p-12'>Enter your name pls</h1>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={(e) => setValue(e.target.value)}
                        type="text"
                        class="
                        form-control
                        block
                        w-96
                        px-3
                        py-1.5
                        text-base
                        font-normal
                         text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                     "
                        id="exampleFormControlInput1"
                        placeholder="Name"
                    />
                    <button type="submit" class=" mt-10  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
                <Link  to='/surname'> <button  class=" ml-4   inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Next</button> </Link>
                </form>
            </div>
        </div>
    )
}

export default Name