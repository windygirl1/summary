import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import list from '../image/quiz4.jpg'
import auth from '../image/quiz3.jpg'
import create from '../image/quiz2.jpg'
import quiz from '../image/quiz1.jpg'

export const Quiz = () => {
  const [current, setCurrent] = React.useState(0)
  const [travel, setTravel] = React.useState('')

  const images = [list, auth, create, quiz]
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
    <h1>Quiz</h1>
    {current === 0 && 
    <div style={{textAlign: 'left'}}>
      <li>Реализация в рамках курса Владилена Минина</li>
      <li>React, React Router</li>
      <li>Hosting Firebase, Realtime Databse Firebase, Authentication Firebase</li>
    </div>
    }
    <a href='https://questions-803e7.web.app/' className='link'>
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
    <img src={image} alt='quiz' className={travel === 'next' ? 'sliderImageNext' : 'sliderImageBack'} style={{width: '200px', borderRadius: '5px'}}/>
    )}
    </div>
    ))}
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {images.map((dot, i) => (
        <span className={i === current ? 'dotActive' : 'dot'}></span>
      ))}
    </div>
    <div className='text'> 
    {current === 0 && <span>На данной странице представлен список тестов</span>}
    {current === 1 && <span>В проекте была реализована авторизация для доступа к публикации тестов, что было достигнуто благодаря Authentication в Firebase</span>}
    {current === 2 && <span>Так выглядит форма для создания теста. В качестве базы данных использовался Realtime Database в Firebase</span>}
    {current === 3 && <span>Это страница ответов на тест. В зависимости от ответа, поле становится либо зелёным, либо красным</span>}
    </div>
    </section>
    <Link to='/easychords' className='link'>
    <button className='button'>
    Следующий проект
    </button>
    </Link>
  </div>
)
}