import NavHead from './NavHead'
import Main from './Main'
import About from './About'
import Contact from './Contact'
//import { Stocks } from './Stocks'
import SectionDivider from './SectionDivider'
import Why from './stats/Why'
import { Team } from './Team'
import { Corousel } from './Corousel'
import Footer from './Footer'



const Home = () => {
  const handleClick = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
    <div className='home'>
      <NavHead/>
     {/* <SectionDivider />  */}
      <Main/> 
      {/* <SectionDivider /> */}
      <Why />
      {/* <SectionDivider /> */}
      <About/>
      <SectionDivider />
      <Corousel/>
      <SectionDivider />
      <Contact/>
      <SectionDivider />
      <Team/>
      </div>
      <Footer />
  {/*<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Sign out</button> */}
      
  </>
  )}

export default Home;