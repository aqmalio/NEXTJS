import Footer from './footer'
import Nav from './nav'
import Header from '../layout/header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}