import CreateCardLayout from '../CreateCardLayout'
import './ShowSplitContainer.css';

const ShowSplitCardInfo = (cardInfo, ref1, ref2) => {
  const image = cardInfo.image_uris
  const cardLayout = cardInfo.card_faces.map(CreateCardLayout)

  const handleClickLeft = (e) => {
    ref1.current.scrollIntoView(
      {
        behavior: 'smooth',
        block:"nearest",  
        inline:"nearest",
      }
    )
  }

  const handleClickRight = (e) => {
    ref2.current.scrollIntoView(
      {
        behavior: 'smooth',
        block:"nearest",  
        inline:"nearest",
      }
    )
  }

  return(
    <div className="searchResultContainer">
      <div className="splitContainer">
        <div>
          <div className="splitCardLayout" ref={ref1}>
            {cardLayout[0]}
          </div>
          <div style={{textAlign:"center"}}>
            <button id = "scrollRight" type = "button" onClick = {handleClickRight} style={{display:"inline-block"}}>  
              <font style={{fontSize:"30px"}}>▶︎</font>
            </button>
          </div>
        </div>
        <div>
          <div className="splitCardLayout" ref={ref2}>
            {cardLayout[1]}
          </div>
          <div style={{textAlign:"center"}}>
            <button id = "scrollLeft" type = "button" onClick = {handleClickLeft} style={{display:"inline-block"}}>  
              <font style={{fontSize:"30px"}}>◀</font>
            </button>
          </div>
        </div>
      </div>
      <div id="cardImage"><img src={image.small}></img></div>
    </div>
  )
}


  
export default ShowSplitCardInfo;