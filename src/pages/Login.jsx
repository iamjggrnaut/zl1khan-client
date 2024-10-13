import React, { useEffect } from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

const Login = () => {

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
            <div className="login-page">
                <div className="log-form">
                    <div className="text-center">
                        <h3 className="ws-name" style={{ fontStyle: 'normal' }}>Login</h3>
                    </div>
                    <div>
                        <label className='mb-3' htmlFor="" >Phone</label>
                        <input type="text" className="form-control" placeholder='phone number' />
                    </div>
                    <div className='mt-3'>
                        <label className='mb-3' htmlFor="" >Password</label>
                        <input type="text" className="form-control" placeholder='phone number' />
                    </div>
                    <div className="text-center">
                        <button className="prime-btn mt-4">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login