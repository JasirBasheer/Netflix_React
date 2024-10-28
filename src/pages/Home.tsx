import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { endpoints } from '../services/tmdb'

function Home() {

  return (
    <>
      <Header />
      <Banner />
      <Row url={endpoints.trending} isSmall={false} title={"Trending Movies"} />
      <Row url={endpoints.popular} isSmall={true} title={"Popular Movies"} />
      <Row url={endpoints.topRated} isSmall={true} title={"Top Rated Movies"} />
      <Row url={endpoints.comedy} isSmall={true} title={"Comedy Movies"} />
      <Row url={endpoints.upcoming} isSmall={true} title={"Upcoming Movies"} />
    </>
  )
}

export default Home
