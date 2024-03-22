import Navbar from "./components/nav/navbar"
import Product from "./pages/cart"
import LandingPage from "./pages/home"
import {Route, Routes, BrowserRouter} from 'react-router-dom'


function App() {

  return (
    <div>
  <BrowserRouter>
  <Navbar />
  <Routes>
   <Route path="/" element={<LandingPage />} />
   <Route path="/cart" element={<Product />} />
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
