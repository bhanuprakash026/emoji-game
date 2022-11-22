// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore} = props

  return (
    <nav className="nav-container">
      <div className="logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="nav-name">Emoji Game</h1>
      </div>
      <div className="nav-score-container">
        <p className="current-score">Score: {currentScore}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
