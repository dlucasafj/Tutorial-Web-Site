import React from 'react'
import CardItem from './CardComponent/CardItem'
import img9 from '../../assets/images/img-9.jpg'
import img2 from '../../assets/images/img-2.jpg'
import img3 from '../../assets/images/img-3.jpg'
import './CardComponent/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out those EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img9}
                            text ='Explore the hidden waterfall deep'
                            label='Adventure'
                            path='/services'
                        />
                         <CardItem
                            src={img2}
                            text ='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={img9}
                            text ='Explore the hidden waterfall deep'
                            label='Adventure'
                            path='/services'
                        />
                         <CardItem
                            src={img2}
                            text ='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src={img3}
                            text ='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
