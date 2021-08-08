import CreateCardLayout from '../CreateCardLayout'
import './ShowDoubleFacesCardInfo.css';

const ShowDoubleFacesCardInfo = (cardInfo, ref1, ref2) => {
  const image1 = cardInfo.card_faces[0].image_uris
  const image2 = cardInfo.card_faces[1].image_uris
  const cardLayout = cardInfo.card_faces.map(CreateCardLayout)

  const handleClickRotate = () => {
    if(ref1.current.classList.contains('is-front')){
      ref1.current.classList.remove('is-front')
      ref1.current.classList.add('is-back')

      ref1.current.style.height = ref2.current.clientHeight + "px"
    } else {
      ref1.current.classList.remove('is-back')
      ref1.current.classList.add('is-front')
    }
  }

  

  return(
    <div className="searchResultContainer">
      <div>
        <div className="wrap is-front" ref={ref1}>
          <div className="card_front">
            <div className="doubleFacesContainer">
              {cardLayout[0]}
              <div className="cardImage"><img src={image1.small}></img></div>
            </div>
          </div>
          <div className="card_back" ref={ref2}>
            <div className="doubleFacesContainer">
              {cardLayout[1]}
              <div className="cardImage"><img src={image2.small}></img></div>
            </div>
          </div>
        </div>
        
        <button id = "rotate" type = "button" className="rotateButton" onClick = {handleClickRotate}>  
            回転
        </button>
      </div>
    </div>
  )
}


  
export default ShowDoubleFacesCardInfo;