import React, { useState,useEffect,useRef } from 'react';
import GetCardList from './GetCardList'
import ShowCardInfo from './ShowCardInfo/ShowCardInfo'
import InputSearchConditions from './InputSearchConditions/InputSearchConditions'

function Main(){
  const [cardList, setCardList] = useState([])
  const [searchConditions, setSearchConditions] = useState({"idColor":""})
  const [timeoutId, setTimeoutId] = useState(0)
  const elsRef = useRef(Array(400).fill().map(e => React.createRef()))

  useEffect(() => {
    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      GetCardList(searchConditions)
      .then(
        result => {
          setCardList(result)
        })
      }, 800)
    )
  },[searchConditions])

  const handleCardNameChange = (e) => {
    setSearchConditions({...searchConditions, "cardName":e.target.value})
  }

  const handleIdColorChange = (e) => {
    let idColor = searchConditions.idColor;
    if(e.target.checked) idColor += e.target.value
    else idColor = idColor.toString().replace(e.target.value, "")
    setSearchConditions({...searchConditions, "idColor":idColor})
  }

  return (
    <div>
      <InputSearchConditions searchWord={searchConditions.cardName} 
        handleCardNameChange={e => handleCardNameChange(e)}
        handleIdColorChange={e => handleIdColorChange(e)} 
      />
      <div>検索結果：{cardList.length}件</div>
      <div>
        <ShowCardList cardList={cardList} ref={elsRef}/>
      </div>
    </div>
  );
}

const ShowCardList = React.forwardRef( (props,ref) => {
  return(
    props.cardList.map((value,index) => ShowCardInfo(value, ref, index))
  )
})

export default Main;