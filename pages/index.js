import { Component } from "react"
import axios from "axios"

import IndexBody from "../components/IndexBody"
import TodaysContent from "../components/TodaysContent"
import Paragraph from "../components/Paragraph"
import getDate from "../utils/date"
import getActivity from "../utils/activity"

class IndexPage extends Component {
  static async getInitialProps() {
    try {
      const { data } = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?zip=22314,us&units=metric&appid=51858544c48a0185fdda33d0946b35d9",
      )
      return { data }
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { weather } = this.props.data

    return (
      <IndexBody>
        <TodaysContent>
          <Paragraph>Today is {getDate()}.</Paragraph>
          <Paragraph>There's some {weather[0].description} here.</Paragraph>
          <Paragraph>I'm probably {getActivity()}.</Paragraph>
        </TodaysContent>
      </IndexBody>
    )
  }
}

export default IndexPage
