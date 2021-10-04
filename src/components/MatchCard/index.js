// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo1} = matchDetails
  return <img src={competingTeamLogo1} alt="image1" className="image3" />
}

export default MatchCard
