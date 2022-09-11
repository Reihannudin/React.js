
import { Banner } from '../../components/banner/banner.component'
import { Row } from '../../components/row/row.component'
import requests from '../../request'

export const Home = () => {
    return(
        <div>
            <Banner />
            <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        </div>
    )
}