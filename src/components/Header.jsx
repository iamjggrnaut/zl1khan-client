import React, { useEffect } from 'react'

const Header = ({ loc }) => {

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
        <div className='header'>
            <div className="container head-container">
                <h3 className="ws-name">
                    ZL1KHAN TRAINING
                </h3>
            </div>
        </div>
    )
}

export default Header