import './Root.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import ProductSection from './Components/ProductSection'


function Root() {


  return (
    <>
      <Navbar></Navbar>   
       <Banner></Banner>
       <ProductSection></ProductSection>
      <Footer></Footer>
    </>
  )
}

export default Root
