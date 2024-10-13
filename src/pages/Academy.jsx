import React from 'react'
import photo1 from '../assets/3.JPG'
import photo2 from '../assets/1.JPG'
import photo3 from '../assets/2.JPEG'

import BottomNav from '../components/BottomNav'
import Header from '../components/Header'

const Academy = () => {
    return (
        <div>
            <Header />

            <div className="container" id='program-list'>

                <div className="row">
                    <div className="col mb-5">
                        <img src={photo1} className='prog-img' alt="" />
                    </div>
                    <div className="col">
                        <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>BEAST TRAINING 1 - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>240$</span> <span style={{ color: 'green' }}>79$</span></h3>
                        <p>✅ Access to the marathon channel with video training</p>
                        <p>✅ Chat with participants</p>
                        <p>✅ Checking reports</p>
                        <p>✅ Feedback to me</p>
                        <p>✅ Meal plan</p>
                        <p>✅ choice of sports nutrition</p>
                        <p>✅ Draw for training with me offline for a month.</p>
                        {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                        <button className="prime-btn">Buy now</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>BEAST TRAINING 2 - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>147$</span> <span style={{ color: 'green' }}>49$</span></h3>
                        <p>✅ Access to the marathon channel with video training</p>
                        <p>✅ Chat with participants</p>
                        <p>✅ Checking reports</p>
                        <p>❌ Feedback to me</p>
                        <p>❌ Meal plan</p>
                        <p>❌ choice of sports nutrition</p>
                        <p>❌ Draw for training with me offline for a month.</p>
                        {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                        <button className="prime-btn">Buy now</button>
                    </div>
                    {/* <div className="col mb-5">
                        <img src={photo2} className='prog-img hidden' alt="" />
                    </div> */}
                </div>
                <div className="row">
                    {/* <div className="col mb-5">
                        <img src={photo3} className='prog-img hidden' alt="" />
                    </div> */}
                    <div className="col">
                        <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>BEAST TRAINING 3 - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>57$</span> <span style={{ color: 'green' }}>19$</span></h3>
                        <p>✅ Access to the marathon channel with video training</p>
                        <p>❌ Chat with participants</p>
                        <p>❌ Checking reports</p>
                        <p>❌ Feedback to me</p>
                        <p>❌ Meal plan</p>
                        <p>❌ choice of sports nutrition</p>
                        <p>❌ Draw for training with me offline for a month.</p>
                        {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                        <button className="prime-btn">Buy now</button>
                    </div>
                </div>

            </div>

            <BottomNav loc={'courses'} />
        </div>
    )
}

export default Academy