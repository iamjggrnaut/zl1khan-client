import React from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

const Profile = () => {
    return (
        <div>
            <Header />
            <div className="container p-4">
                <div>
                    <h5>My programs</h5>
                    <ol className='mt-4'>
                        <li>Program 1</li>
                        <li>Program 2</li>
                    </ol>
                </div>
                <div>
                    <h5>Available programs</h5>
                    <ol className='mt-4'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <li>Program 3</li>
                            <div>
                                <button className="prime-btn">Buy</button>
                            </div>
                        </div>
                    </ol>
                </div>
            </div>
            <BottomNav loc={'profile'} />
        </div>
    )
}

export default Profile