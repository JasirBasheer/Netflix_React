
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Row from './components/Row'
import { API_KEY } from './constants/constants'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Row  url={`trending/all/week?api_key=${API_KEY}&language=en-US`} isSmall={false} title={"Trending Movies"}/>
      <Row url={`discover/movie?api_key=${API_KEY}&with_genres=28`} isSmall={true} title={"Action Movies"}/>
      <Row url={`discover/movie?api_key=${API_KEY}&with_genres=27`} isSmall={true} title={"Romatic Movies"}/>
      <Row url={`discover/movie?api_key=${API_KEY}&with_genres=35`}  isSmall={true} title={"Korean Movies"}/>
    </>
  )
}

export default App
