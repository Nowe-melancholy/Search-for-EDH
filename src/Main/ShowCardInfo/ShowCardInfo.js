import CreateCardLayout from './CreateCardLayout'
import ShowSplitCardInfo from './ShowSplitCardInfo';
import ShowDoubleFacesCardInfo from './ShowDoubleFacesCardInfo';

const ShowCardInfo = (cardInfo, elsStates, setElsState, ref, index) => {
    if(cardInfo.layout === 'normal'){
      const image = cardInfo.image_uris
      return(
        <div className="searchResultContainer">
          {CreateCardLayout(cardInfo)}
          <div id="cardImage"><img src={image.small}></img></div>
        </div>
      )
    }else if(cardInfo.layout === 'transform' || cardInfo.layout === 'modal_dfc'){
      return(
        <div>
          {ShowDoubleFacesCardInfo(cardInfo, ref.current[index])}
        </div>
      )
    } else if(cardInfo.layout === 'split'){
      return(
        <div>
          {ShowSplitCardInfo(cardInfo, ref.current[index*2], ref.current[index*2+1])}
        </div>
      )
    }
}

export default ShowCardInfo;