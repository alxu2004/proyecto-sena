import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from './../components/Header';
export const Hombre = () => {
  return (
    <>
        <Header/>
        <h1 className='Title-Hombre'>Men</h1>
        <Cards/>
        <Footer/>
    </>
  )
}
