import CreateCardLayout from './CreateCardLayout'
import './ShowDoubleFacesCardInfo.css';

const ShowDoubleFacesCardInfo = (cardInfo,ref) => {
  const image1 = cardInfo.card_faces[0].image_uris
  const image2 = cardInfo.card_faces[1].image_uris
  const cardLayout = cardInfo.card_faces.map(CreateCardLayout)

  const handleClickRotate = () => {
    if(ref.current.classList.contains('is-front')){
      ref.current.classList.remove('is-front')
      ref.current.classList.add('is-back')
    } else {
      ref.current.classList.remove('is-back')
      ref.current.classList.add('is-front')
    }
    
  }

  return(
    <div className="searchResultContainer">
        
        <div className="wrap is-front" ref={ref}>
          <div className="card_front">
            <div className="card">
              {cardLayout[0]}
              <div id="cardImage"><img src={image1.small}></img></div>
            </div>
            <button id = "rotate" type = "button" onClick = {handleClickRotate} style={{display:"inline-block"}}>  
              <font style={{fontSize:"30px"}}>回転</font>
            </button>
          </div>
          <div className="card_back">
            <div className="card">
              {cardLayout[1]}
              <div id="cardImage"><img src={image2.small}></img></div>
            </div>
            <button id = "rotate" type = "button" onClick = {handleClickRotate} style={{display:"inline-block"}}>  
              <font style={{fontSize:"30px"}}>回転</font>
            </button>
          </div>
        </div>
    </div>
  )
}


  
export default ShowDoubleFacesCardInfo;