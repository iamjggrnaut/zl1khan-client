import React from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import { Link } from 'react-router-dom'
import insta from '../assets/insta.png'

const SocialMedia = () => {
    return (
        <div>
            <Header />
            <div className="social-page">
                <div className="container social-container">
                    <div className="text-center">
                        <h4 className='pt-4 pb-2'>Follow us on social media</h4>
                    </div>
                    <Link className='d-flex align-items-center gap-2' to={'https://www.instagram.com/zl1khan?igsh=MXh4aWVwM25uM2hqYg=='} style={{ textDecoration: 'none' }}>
                        <img className='insta-icon' src={insta} alt="" />
                        <h5 className='mb-0' style={{ textDecoration: 'none' }}>ZL1KHAN</h5>
                    </Link>
                </div>
            </div>
            <BottomNav loc={'social'} />
        </div>
    )
}

export default SocialMedia