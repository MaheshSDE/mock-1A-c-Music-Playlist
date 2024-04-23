import {MdDelete} from 'react-icons/md'
import './index.css'

const ListItems = props => {
  const {itemDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = itemDetails

  const onClickDelete = () => {
    deleteTrack(id)
  }

  return (
    <li className="list-item">
      <div className="list-item-container">
        <div className="image-name-container">
          <img src={imageUrl} alt="track" className="track-image" />
          <div className="name-genre-container">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="duration-delete-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-icon-button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <MdDelete className="delete-icon" />.
          </button>
        </div>
      </div>
    </li>
  )
}
export default ListItems
