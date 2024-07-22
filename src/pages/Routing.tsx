import { lazy, Suspense } from 'react'
import Header from '../widget/header/Header'
import { Route, Routes } from 'react-router-dom'

function Routing() {
  const HomePage = lazy(() => import('./HomePage/HomePage'))
  return (
    <Suspense fallback={<span>Загрузка...</span>}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Suspense>
  )
}

export default Routing
