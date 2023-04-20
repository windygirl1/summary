import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import main from '../image/main.jpg'
import text from '../image/text.jpg'
import letters from '../image/letters.jpg'

export const Send = () => {
  const [current, setCurrent] = React.useState(0)
  const [travel, setTravel] = React.useState('')

  const images = [main, text, letters]
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setTravel('next')
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setTravel('back')
  }

  if (!Array.isArray(images) || images.length <= 0) {
    return null
  }

console.log(travel)
return (
  <div className='background'>
    <Link to='/' className='link'>
    <button className='button'>
    На главную
    </button>
    </Link>
    <section className='slider'>
    <div className='text'>
    <h1>Send</h1>
    {current === 0 && 
    <div style={{textAlign: 'left'}}>
      <li>Самостоятельный проект в рамках обучения работы с API</li>
      <li>React, React Router. Для стилей Bootstrap</li>
      <li>Hosting Firebase, Realtime Database Firebase</li>
    </div>
    }
    <a href='https://talks-a2a25.web.app/' className='link'>
    <button className='button'>
    Открыть приложение
    </button>
    </a>
    </div>
    <div style={{textAlign: 'center'}}>
    <button className='button' onClick={prevSlide}>
    Назад
    </button>
    
    <button className='button' onClick={nextSlide}>
    Дальше
    </button>
    
    </div>
    {images.map((image, index) => (
    <div
    className='sliderSlide'
    key={index}
    >
    {index === current && (
    <img src={image} alt='send' className={travel === 'next' ? 'sliderImageNext' : 'sliderImageBack'} style={{width: '200px', borderRadius: '5px'}}/>
    )}
    </div>
    ))}
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {images.map((dot, i) => (
        <span className={i === current ? 'dotActive' : 'dot'}></span>
      ))} 
    </div>
    <div className='text'> 
    {current === 0 && <span>Встречает пользователя иконка приложения и навигация</span>}
    {current === 1 && <span>На данной странице пользователь может написать своё сообщение, которое дальше передаётся в Realtime Database</span>}
    {current === 2 && <span>Уже на этой странице пользователь может увидеть своё, а так же сообщения других пользователей</span>}
    </div>
    </section>
    <div style={{display: 'flex'}}>
    <Link to='/easychords' className='link'>
    <button className='button'>
    К предыдущему 
    </button>
    </Link>
    </div>
  </div>
)
}