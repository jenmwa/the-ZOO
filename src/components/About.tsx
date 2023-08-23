import '../style/animal.scss'

export const About = () => {

    return <>
    <section className='about-section'>
    <h2>Välkommen till the ZOO!</h2>
    <p className='about-text-left'>Som en del av kursen Javascript - Fördjupning MedieInstitutet 2023 fick vi i uppgift att skapa en React-applikation vid namn the Zoo. </p>
    <p className='about-text-left'>Genom att hämta ett API, använda React Router så skulle det gå att rendera ut djur och deras info, samt utifrån när de senast blev matade, få någon visuell feedback och kunna mata igen.</p>
    <p className='about-text-left'>I min app går vi in på Våra Djur-routen, där renderas djuren och användaren får dels i text veta om djuret [har fått mat.] [börjar bli hungrig.] [behöver bli matad!], även visuell respons med olik-färgade samt olika tjocklek på ramarna på djuren (du ska se skillnad på status även om du inte ser färger.</p>
    <p className='about-text-left'>Om det gått 4h eller mer från när djuret senast åt så behöver djuret bli matad och du kan klicka/tabba+enter in på djuret och mata det.</p>
    <p className='about-text-left'>Om det gått 3h från när djuret blev matat sist så börjar det bli hungrigt, och du kan gå in och mata den.</p>
    <p className='about-text-left'>Om det är upp till 3h sen djuret åt så är det frid och fröjd och du kan pyssla med annat!</p>
    <p className='about-text-left'>Jag har använt mig av sessionStorage för att kunna hämta och updatera listan med djur.</p>
    <p className='about-thank-p'>tack för besöket <br></br>&</p><span className='about-thank'>Välkomna till the ZOO!</span>
    </section>
    </>
}