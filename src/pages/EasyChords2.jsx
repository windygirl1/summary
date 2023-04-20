import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import chords1 from '../image/Easy chords (1).jpg'
import chords2 from '../image/Easy chords (2).jpg'
import chords3 from '../image/Easy chords (3).jpg'

export const EasyChords2 = () => {
  const [current, setCurrent] = React.useState(0)
  const [travel, setTravel] = React.useState('')

  const images = [chords1, chords2, chords3]
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
    <h1>EasyChords</h1>
    {current === 0 && 
    <div style={{textAlign: 'left'}}>
      <li>Переделанное первое приложение</li>
      <li>React, React Router. В качестве стилей VKUI</li>
      <li>Hosting Firebase, Storage Firebase, Realtime Database Firebase</li>
      <li>VK Mini App</li>
    </div>
    }
    <a href='https://vk.com/app8125261' className='link'>
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
    {current === 0 && <span>Вместо использования фотографий напрямую в HTML, как это было раньше, фотографии загружаются из базы данных</span>}
    {current === 1 && <span>Применение VKUI для гармонии с самим VK</span>}
    {current === 2 && <span>Приложение используется как VK Mini App</span>}
    </div>
    </section>
    <div style={{display: 'flex'}}>
    <Link to='/wallpapers' className='link'>
    <button className='button'>
    Следующий проект
    </button>
    </Link>
    </div>
  </div>
)
}