// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, gettingEmoji} = props
  const {emojiName, emojiUrl, id} = emojis

  const updateScore = () => {
    gettingEmoji(id)
  }
  return (
    <li>
      <button className="btn" type="button" onClick={updateScore}>
        <img src={emojiUrl} alt={emojiName} className="emoji-card-logo" />
      </button>
    </li>
  )
}
export default EmojiCard
