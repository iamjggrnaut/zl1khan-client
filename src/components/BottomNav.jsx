import React from 'react'
import { Link } from 'react-router-dom'
import { MdFitnessCenter } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";
import { IoFitness } from "react-icons/io5";
import { FaShoppingBag, FaUser } from "react-icons/fa";


const BottomNav = ({ loc }) => {

    return (
        <div className='mobnav'>
            <div className="container mobnav-container">
                <Link className='moblink' to={'/courses'}>
                    <MdFitnessCenter style={loc === 'courses' ? { fill: 'red' } : {}} />
                    <span style={loc === 'courses' ? { color: 'red' } : {}}>Pograms</span>
                </Link>
                <Link className='moblink' to={'/social'} style={loc === 'social' ? { color: 'red' } : {}}>
                    <TiSocialInstagram style={loc === 'social' ? { fill: 'red' } : {}} />
                    <span style={loc === 'social' ? { color: 'red' } : {}}>Media</span>
                </Link>
                <Link className='moblink' to={'/'}>
                    <IoFitness style={loc === 'main' ? { fill: 'red' } : {}} />
                    <span style={loc === 'main' ? { color: 'red' } : {}}>Main</span>
                </Link>
                <Link className='moblink' to={'/merch'} style={loc === 'merch' ? { color: 'red' } : {}}>
                    <FaShoppingBag style={loc === 'merch' ? { fill: 'red' } : {}} />
                    <span style={loc === 'merch' ? { color: 'red' } : {}}>Shop</span>
                </Link>
                <Link className='moblink' to={'/profile'} style={loc === 'profile' ? { color: 'red' } : {}}>
                    <FaUser style={loc === 'profile' ? { fill: 'red' } : {}} />
                    <span style={loc === 'profile' ? { color: 'red' } : {}}>Profile</span>
                </Link>
            </div>
        </div>
    )
}

export default BottomNav