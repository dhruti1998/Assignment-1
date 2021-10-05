// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, detailList: {}}

  componentDidMount() {
    this.getDetailsOfItem()
  }

  getDetailsOfItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
      recentMatches: data.recent_matches.map(eachItem => ({
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        date: eachItem.date,
        firstInnings: eachItem.first_innings,
        manOfTheMatch: eachItem.man_of_the_match,
        matchStatus: eachItem.match_status,
        id: eachItem.id,
        result: eachItem.result,
      })),
    }
    this.setState({detailList: updatedData, isLoading: false})
  }

  renderInfoSection = () => {
    const {detailList} = this.state
    const {recentMatches} = detailList

    console.log(detailList)

    return (
      <li className="part2BG-container">
        <img
          src={detailList.teamBannerUrl}
          alt="team banner"
          className="bannerImage"
        />
        <p className="latest-para">Latest Matches</p>
        <LatestMatch matchDetails={detailList} />
        <ul className="ul-list1">
          {recentMatches.map(eachItem => (
            <MatchCard matchDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </li>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container1">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderInfoSection()
        )}
      </div>
    )
  }
}

export default TeamMatches
