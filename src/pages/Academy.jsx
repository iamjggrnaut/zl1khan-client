import React, { useEffect } from 'react'
import photo1 from '../assets/3.JPG'
import photo2 from '../assets/1.JPG'
import photo3 from '../assets/2.JPEG'

import BottomNav from '../components/BottomNav'
import Header from '../components/Header'

const Academy = () => {

    useEffect(() => {
        // Проверка наличия объекта TelegramGameProxy
        if (window.TelegramGameProxy) {
            // Пример вызова метода receiveEvent
            const eventData = { /* ваши данные события */ };
            window.TelegramGameProxy.receiveEvent(eventData);
        } else {
            console.error("TelegramGameProxy is not available.");
        }
    }, []);

    return (
        <div>
            <Header />

            <div className="container" id='program-list'>

                <div className="row">
                    <div className="col mb-5">
                        <img src={photo1} className='prog-img' alt="" />
                    </div>
                    <div className="container">
                        <div className="col program-card">
                            <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>Basic Home Workout Program - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>240$</span> <span style={{ color: 'green' }}>79$</span></h3>
                            <br />
                            <p>The Basic Home Workout Program is designed for those who want to maintain their physical fitness without leaving home. This program includes a series of simple yet effective exercises that require no special equipment. The included movements help develop strength, endurance, and flexibility. The program is suitable for beginners and can be adapted for individuals with varying levels of fitness. Workouts can be performed at convenient times, making it easy to fit training into a daily routine.</p>
                            <br />
                            <p className="fw-bold"> Key Features:</p>

                            <ul>
                                <li>Equipment-free exercises</li>
                                <li> Suitable for all fitness levels</li>
                                <li> Flexible workout schedule</li>
                                <li> Diverse programs for each day</li>
                            </ul>
                            {/* <p>✅ Access to the marathon channel with video training</p>
                        <p>✅ Chat with participants</p>
                        <p>✅ Checking reports</p>
                        <p>✅ Feedback to me</p>
                        <p>✅ Meal plan</p>
                        <p>✅ choice of sports nutrition</p>
                        <p>✅ Draw for training with me offline for a month.</p> */}
                            {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                            <button className="prime-btn">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="col program-card">
                            <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>Basic Mass Gain Program - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>237$</span> <span style={{ color: 'green' }}>149$</span></h3>
                            <br />
                            <p>The Basic Mass Gain Program is aimed at individuals looking to increase muscle mass and strength. This program includes specially selected strength exercises that activate major muscle groups and promote growth. The exercises are performed using free weights and machines, allowing for maximum effectiveness. This program is ideal for beginners as well as experienced athletes who want to improve their results.</p>
                            <br />
                            <p className="fw-bold">Key Features:</p>
                            <ul>
                                <li>Focus on increasing muscle mass</li>
                                <li>Variety of strength exercises</li>
                                <li>Individualized approach to training</li>
                                <li>Nutrition recommendations for optimal results</li>
                            </ul>
                            {/* <p>✅ Access to the marathon channel with video training</p>
                        <p>✅ Chat with participants</p>
                        <p>✅ Checking reports</p>
                        <p>❌ Feedback to me</p>
                        <p>❌ Meal plan</p>
                        <p>❌ choice of sports nutrition</p>
                        <p>❌ Draw for training with me offline for a month.</p> */}
                            {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                            <button className="prime-btn">Buy now</button>
                        </div>
                    </div>
                    {/* <div className="col mb-5">
                        <img src={photo2} className='prog-img hidden' alt="" />
                    </div> */}
                </div>
                <div className="row">
                    {/* <div className="col mb-5">
                        <img src={photo3} className='prog-img hidden' alt="" />
                    </div> */}
                    <div className="container">
                        <div className="col program-card">
                            <h3 className='fw-bold' style={{ fontStyle: 'italic' }}>Basic Muscle Definition Program - <span style={{ textDecoration: 'line-through', color: 'red', fontSize: '3vh' }}>227$</span> <span style={{ color: 'green' }}>139$</span></h3>
                            <br />
                            <p> The Basic Muscle Definition Program is designed for those who want to achieve muscle definition and toning. This program combines strength training with cardio workouts to help reduce body fat percentage and improve overall physical condition. The exercises target various muscle groups, allowing for balanced body development. This program is suitable for both beginners and individuals with prior experience in training who wish to enhance their results.</p>
                            <br />
                            <p className="fw-bold">Key Features:</p>
                            <ul>
                                <li>Combination of strength and cardio workouts</li>
                                <li>Support in achieving muscle definition</li>
                                <li>Support in achieving muscle definition</li>
                                <li>Feedback and support from a coach</li>
                            </ul>

                            {/* <p>✅ Access to the marathon channel with video training</p>
                        <p>❌ Chat with participants</p>
                        <p>❌ Checking reports</p>
                        <p>❌ Feedback to me</p>
                        <p>❌ Meal plan</p>
                        <p>❌ choice of sports nutrition</p>
                        <p>❌ Draw for training with me offline for a month.</p> */}
                            {/* <a href='https://t.me/ZLKHAN' style={{ textDecoration: 'none', color: 'white' }} className="prime-btn fw-bold">JOIN NOW</a> */}
                            <button className="prime-btn">Buy now</button>
                        </div>
                    </div>
                </div>

            </div>

            <BottomNav loc={'courses'} />
        </div>
    )
}

export default Academy