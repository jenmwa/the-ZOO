import '../style/home.scss'

export const Home = () => {

  return <>
    <p>Välkomna till</p>
    <div className='hero-img'>

      <div className='hero-text'>
      <div className='logo-container'>
        <img src='public/logo_light.png' alt='the zoo logo' width={350} />
      </div>
    
        <p>this will be our marketing message</p>
        <button>CTA BUTTON</button>
      </div>
    </div>
  </>
}