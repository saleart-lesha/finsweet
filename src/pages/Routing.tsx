import { lazy, Suspense } from 'react'
import Header from '../widget/header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from '../widget/footer/Footer'

function Routing() {
  const HomePage = lazy(() => import('./homePage/HomePage'))
  return (
    <Suspense fallback={<span>Загрузка...</span>}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default Routing
