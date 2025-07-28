import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProcurementsPage from './pages/ProcurementsPage'
import CategoriesPage from './pages/CategoriesPage'
import AboutPage from './pages/AboutPage'
import IntegrityPolicyPage from './pages/IntegrityPolicyPage'

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upphandlingar" element={<ProcurementsPage />} />
          <Route path="/kategorier" element={<CategoriesPage />} />
          <Route path="/om-oss" element={<AboutPage />} />
          <Route path="/integritetspolicy" element={<IntegrityPolicyPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
