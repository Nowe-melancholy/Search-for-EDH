import '../ShowCardInfo.css';
import CreateNormalCardLayout from '../CreateCardLayout'

const ShowNormalCardInfo = (cardInfo) => {
    const image = cardInfo.image_uris
    return(
        <div className="searchResultContainer">
            {CreateNormalCardLayout(cardInfo)}
            <div className="cardImage"><img src={image.small}></img></div>
        </div>
    )
}

export default ShowNormalCardInfo;