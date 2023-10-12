// Write your code here.

import './index.css'

const LOSE_GAME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_GAME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? WON_GAME_IMAGE : LOSE_GAME_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winOrLossCard">
      <div className="detailsSection">
        <h1 className="gameStatus">{gameStatus}</h1>
        <p className="currentScoreLevel">{scoreLabel}</p>
        <p className="currentScoreValue">{score}/12</p>
        <button
          type="button"
          className="playAgainButton"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="imageContainer">
        <img className="winLossImage" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
