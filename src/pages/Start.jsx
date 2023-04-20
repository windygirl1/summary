import React from 'react'
import './Start.css'
import old from '../image/old.png'
import New from '../image/new.png'
import { Link } from 'react-router-dom'

function Start() {

  const [showOld, setShowOld] = React.useState(false)
  const [showNew, setShowNew] = React.useState(false)

  return (
    <div className='App-header'>
      <div className='fade-in'>
        <h1>Поехали</h1>
        <Link to='/quiz' className='link'>
        <button 
          className='button' 
          onMouseEnter={() => setShowOld(true)}
          onMouseLeave={() => setShowOld(false)}
        >
          С чего всё начиналось
        </button>
        </Link>
        <Link to='/easychords2' className='link'>
        <button 
          className='button'
          onMouseEnter={() => setShowNew(true)}
          onMouseLeave={() => setShowNew(false)}
        >
          Готовые проекты
        </button>
        </Link>
        <div className='container'>
        {showOld &&
        <div className='fade-in'>
          <img src={old} alt='old projects' className='oldImg'/>
        </div>
        }
        {showNew &&
        <div className='fade-in'>
          <img src={New} alt='new projects' className='oldImg'/>
        </div>
        }
        </div>
      </div>
    </div>
  );
}

export default Start;