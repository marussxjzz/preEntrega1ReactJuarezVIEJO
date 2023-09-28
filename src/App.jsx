import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Header/>
      <ItemListContainer greeting="Bienvenidos a mi tienda!" />
      <Footer/>
    </>
  )
}

export default App
