import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out those EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__itens'>
                        <CardItem
                            src='images/img-9.jpg'
                            text ='Explore the hidden waterfall deep'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
