// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails
  return (
    <div className="latest-match-container">
      <div className="sectionTM1">
        <h1 className="competing_heading">{competingTeam}</h1>
        <h1 className="competing_heading">{date}</h1>
        <p className="para4">{venue}</p>
        <p className="para4">{result}</p>
      </div>
      <img src={competingTeamLogo} alt={competingTeam} className="image3" />
      <div className="sectionTM2">
        <p className="para5">First Innings</p>
        <p className="para4">{firstInnings}</p>
        <p className="para5">Second Innings</p>
        <p className="para4">{secondInnings}</p>
        <p className="para5">Man Of The Match</p>
        <p className="para4">{manOfTheMatch}</p>
        <p className="para5">Umpires</p>
        <p className="para4">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
