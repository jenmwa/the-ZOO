import { Link } from 'react-router-dom'
import '../style/home.scss'

export const Home = () => {

  return <>
    <p>Välkomna till</p>
    <div className='hero-img'>
      <div className='hero-info'>
        <div className='logo-container'>
          <img src='public/logo_light.png' alt='the zoo logo' width={350} />
        </div>
        <p>this will be our marketing message</p>
        <Link to='/animals'>
        <button>Våra djur</button>
          </Link>
      </div>
    </div>
  </>
}