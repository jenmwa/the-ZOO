import { Link } from 'react-router-dom'
import '../style/home.scss'

export const Home = () => {

  return <>
   
    <div className='hero-img'>
      <div className='hero-info'>
      <p>Välkomna till</p>
        <div className='logo-container'>
          <img src='/logo_light.png' alt='the zoo logo' width={375} />
        </div>
        <p>this will be our marketing message</p>
        <Link to='/animals'>
          <button>Våra djur</button>
        </Link>
      </div>
    </div>
  </>
}