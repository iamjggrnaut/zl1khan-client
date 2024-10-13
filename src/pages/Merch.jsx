import React, { useEffect } from 'react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

const Merch = () => {

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
            <div className='merch-page'>
                <div className="container merch-container">

                    <div className="d-flex align-items-center justify-content-center pb-5">
                        <span class="loader"></span>
                    </div>

                    <h4 className="ws text-center">
                        This page is going to be updated soon. <br />
                        Stay tuned!
                    </h4>
                </div>
            </div>
            <BottomNav loc={'merch'} />
        </div>
    )
}

export default Merch