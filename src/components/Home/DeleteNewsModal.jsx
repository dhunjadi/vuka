import React, {useContext} from 'react'
import { NewsContext } from '../../context/NewsContext';


export default function DeleteNewsModal(props) {
    const {title, setShowDeleteNewsModal, showDeleteNewsModal, newsPiece } = props
    const {news, setNews} = useContext(NewsContext)

    const handleConfirmNewsDelete = (newsToRemove) => {
      setNews(news.filter((element) => element.id !== newsToRemove.id));
    };
    return (
        <div className="modal">
          <div className="delete-news-modal-title">
            <h1>Are you sure you want to delete {title}?</h1>
          </div>
          <div className="delete-news-modal-btns">
            <button onClick={() => handleConfirmNewsDelete(newsPiece)}>
              Yes
            </button>
            <button
              onClick={() => setShowDeleteNewsModal(!showDeleteNewsModal)}
            >
              No
            </button>
          </div>
        </div>
    )
}

