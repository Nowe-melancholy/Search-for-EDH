import ShowNormalCardInfo from './normal/ShowNormalCardInfo';
import ShowSplitCardInfo from './split/ShowSplitCardInfo';
import ShowDoubleFacesCardInfo from './doubleFaces/ShowDoubleFacesCardInfo';

import './ShowCardInfo.css';

const ShowCardInfo = (cardInfo, ref, index) => {
  if(cardInfo.layout === 'normal'){
    return(
      <div>
        {ShowNormalCardInfo(cardInfo)}
      </div>
    )
  }else if(cardInfo.layout === 'transform' || cardInfo.layout === 'modal_dfc'){
    return(
      <div>
        {ShowDoubleFacesCardInfo(cardInfo, ref.current[index*2], ref.current[index*2+1])}
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