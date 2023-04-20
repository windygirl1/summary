import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import search from '../image/search.jpg'
import home from '../image/home.jpg'
import similary from '../image/similary.jpg'

export const SearchFilm = () => {
  const [current, setCurrent] = React.useState(0)
  const [travel, setTravel] = React.useState('')

  const images = [search, home, similary]
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
    <h1>SearchFilm</h1>
    {current === 0 && 
    <div style={{textAlign: 'left'}}>
      <li>Создание сервиса для просмотра фильмов, а так же поиска похожих</li>
      <li>React, React Router. В качестве стилей VKUI</li>
      <li>Hosting Firebase, Kinopoisk API. Так же сервис, предоставляющий фильмы</li>
      <li>VK Mini App</li>
    </div>
    }
    <a href='https://searchfilm-ebc75.web.app/' className='link'>
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
    {current === 0 && <span>На начальной странице пользователь может найти фильм который ему хочется. Поиск осуществляется благодаря Kinopoisk API</span>}
    {current === 1 && <span>Так же на начальной странице после поиска пояляются афиши фильмов, ID фильма и iframe для просмотра</span>}
    {current === 2 && <span>Если скопировать с начальной страницы ID фильма и перейти к поиску похожих, то с помощью того же Kinopoisk API можно найти схожие фильмы</span>}
    </div>
    </section>
    <div style={{display: 'flex'}}>
    <Link to='/wallpapers' className='link'>
    <button className='button'>
    К предыдущему 
    </button>
    </Link>
    </div>
  </div>
)
}