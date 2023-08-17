import { Link } from "react-router-dom";
import '../style/navigation.scss'

export const Navigation = () => {
  return <>
    <nav className='navigation'>
      <div className='logo-container'>
        <img src='/logo_light.png' alt='the zoo logo' width={150} />
      </div>
      <div className='menu'>
        <ul>
          <li><Link to='/'>Hem</Link></li>
          <li><Link to='/about'>Om oss</Link></li>
          <li><Link to='/animals'><div>Våra djur</div></Link></li>
        </ul>
      </div>

    </nav>
  </>
}