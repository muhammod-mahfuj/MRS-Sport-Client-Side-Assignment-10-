import './Root.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import ProductSection from './Components/ProductSection'
import SportsCategory from './Components/SportsCategory'
import CustomerReviews from './Components/CustomerReviews'
import FeedbackForm from './Components/FeedbackForm'


function Root() {


  return (
    <>
      <Navbar></Navbar>   
       <Banner></Banner>
       <ProductSection></ProductSection>
       <SportsCategory></SportsCategory>
       <CustomerReviews></CustomerReviews>
       <FeedbackForm></FeedbackForm>
      <Footer></Footer>
    </>
  )
}

export default Root
