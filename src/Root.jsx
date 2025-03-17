import './Root.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import ProductSection from './Components/ProductSection'
import SportsCategory from './Components/SportsCategory'
import CustomerReviews from './Components/CustomerReviews'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'


function Root() {


  return (
    <>
      <Navbar></Navbar>   
       <Banner></Banner>
       <ProductSection></ProductSection>
       <SportsCategory></SportsCategory>
       <AboutUs></AboutUs>
       <CustomerReviews></CustomerReviews>
       <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  )
}

export default Root
