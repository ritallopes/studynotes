import Footer from '../components/footer'
import Meta from '../components/meta'
import Menu from './Menu'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Menu />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
