import { Link } from "react-router-dom";
import '../style/navigation.scss'

export const Navigation = () => {
    return <>
    <nav className='navigation'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/animals'><button>Animals</button></Link></li>
      </ul>
    </nav>
  </>
}