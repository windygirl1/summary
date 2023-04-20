import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import profile from '../image/profile.jpg'
import gallery from '../image/gallery.jpg'
import upload from '../image/upload.jpg'

export const Wallpapers = () => {
  const [current, setCurrent] = React.useState(0)
  const [travel, setTravel] = React.useState('')

  const images = [profile, gallery, upload]
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
    <h1>Wallpapers</h1>
    {current === 0 && 
    <div style={{textAlign: 'left'}}>
      <li>Обучение работы с БД для загрузки и получения изображений</li>
      <li>React, React Router. В качестве стилей VKUI</li>
      <li>Hosting Firebase, Storage Firebase, Realtime Database Firebase</li>
      <li>VK Mini App</li>
    </div>
    }
    <a href='https://vk.com/app51453806' className='link'>
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
    {current === 0 && <span>На этой странице предствален профиль. Загрузка изображения производится посредством получения данных из VK. Здесь же при загрузке фото, можно видеть то, что загрузил ты</span>}
    {current === 1 && <span>Это галерея, здесь появляются все загруженные пользователями фотографии, так же есть возможность перейти в профиль человека в VK</span>}
    {current === 2 && <span>Это страница для загрузки фотографий. Сначала изображение загружается в Firebase Storage, следом идёт получение оттуда ссылки на фото, которая передаётся в Realtime Database</span>}
    </div>
    </section>
    <div style={{display: 'flex'}}>
    <Link to='/easychords2' className='link'>
    <button className='button'>
    К предыдущему 
    </button>
    </Link>
    <Link to='/searchfilm' className='link'>
    <button className='button'>
    Следующий проект
    </button>
    </Link>
    </div>
  </div>
)
}