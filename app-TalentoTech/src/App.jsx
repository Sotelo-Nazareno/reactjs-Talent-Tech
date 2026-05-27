import './App.css';
import { Layout } from './components/Layout/Layout';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';



function App() {
  
  return (
    <>
      <div className='app'>
        <Layout>
          <ItemListContainer mensaje={'Nuestros productos'} subtitulo={'Nuestas ofertas!'} />
        </Layout>
      </div>
    </>
    )
}

export default App
