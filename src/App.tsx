import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {AboutPage} from './pages/AboutPage'
import {Navigation} from './components/Navigation'

import { Container } from '@mui/system'

function App() {
  return (
    <>
    <Container maxWidth="lg">
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProductsPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
      </Container>
    </>
  )
}

export default App;
