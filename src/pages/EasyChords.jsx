import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import start from '../image/start.jpg'
import homepage from '../image/homepage.jpg'
import nav from '../image/nav.jpg'

export const EasyChords = () => {
  const [current, setCurrent] = React.useState(0)
  const [travel, setTravel] = React.useState('')

  const images = [start, homepage, nav]
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

return (
  <div className='background'>
    <Link to='/' className='link'>
    <button className='button'>
    На главную
    </button>
    </Link>
    <section className='slider'>
    <div className='text'>
    <h1>EasyChords</h1>
    {current === 0 && 
    <div style={{textAlign: 'left'}}>
      <li>Первое самостоятельное приложение</li>
      <li>Нативный JS и щепотка jQuery</li>
      <li>Hosting Firebase</li>
    </div>
    }
    <a href='https://easychords-3df4c.web.app/' className='link'>
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
    <img src={image} alt='easychords' className={travel === 'next' ? 'sliderImageNext' : 'sliderImageBack'} style={{width: '200px', borderRadius: '5px'}}/>
    )}
    </div>
    ))}
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {images.map((dot, i) => (
        <span className={i === current ? 'dotActive' : 'dot'}></span>
      ))}
    </div>
    <div className='text'> 
    {current === 0 && <span>Встречает пользователя описание сервиса</span>}
    {current === 1 && <span>После описания можно видеть панель навигации и отображение аккордов. Из-за использования фото напрямую в HTML загрузка их самих крайне долгая</span>}
    {current === 2 && <span>Навигация была реализована благодаря небольшому отрезку кода на jQuery</span>}
    </div>
    </section>
    <div style={{display: 'flex'}}>
    <Link to='/quiz' className='link'>
    <button className='button'>
    К предыдущему 
    </button>
    </Link>
    <Link to='/send' className='link'>
    <button className='button'>
    Следующий проект
    </button>
    </Link>
    </div>
  </div>
)
}