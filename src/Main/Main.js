import './Main.css';
import React, { useState,useEffect,useRef } from 'react';
import GetCardList from './GetCardList'
import ShowCardInfo from './ShowCardInfo/ShowCardInfo'

function Main(){
  const [cardList, setCardList] = useState([])
  const [searchConditions, setSearchConditions] = useState({"idColor":""})
  const [timeoutId, setTimeoutId] = useState(0)
  const elsRef = useRef([])
  const [elsStates, setElsStates] = useState([])

  const setElsState = (index, str) => {
    elsStates[index] = str
  }

  useEffect(() => {
    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      GetCardList(searchConditions)
      .then(
        result => {
          setCardList(result)
          elsRef.current.push(React.createRef(), React.createRef())
          setElsStates(new Array(result.length).fill("is-front"))
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
      <div>
        <ShowCardList cardList={cardList} elsStates={elsStates} setElsState={()=>setElsState} ref={elsRef}/>
      </div>
    </div>
  );
}

const InputSearchConditions = (props) => {
  return(
    <div>
      <div>カード名　<input type="search" value={props.searchWord} onChange={e => props.handleCardNameChange(e)} /></div>
      <div>
        固有色　　
        <input type="checkbox" name="idColor" value="W" onChange={e => props.handleIdColorChange(e)}></input>白
        <input type="checkbox" name="idColor" value="U" onChange={e => props.handleIdColorChange(e)}></input>青
        <input type="checkbox" name="idColor" value="B" onChange={e => props.handleIdColorChange(e)}></input>黒
        <input type="checkbox" name="idColor" value="R" onChange={e => props.handleIdColorChange(e)}></input>赤
        <input type="checkbox" name="idColor" value="G" onChange={e => props.handleIdColorChange(e)}></input>緑
        <input type="checkbox" name="idColor" value="C" onChange={e => props.handleIdColorChange(e)}></input>無色
      </div>
    </div>
  )
}

const ShowCardList = React.forwardRef( (props,ref) => {
  return(
    props.cardList.map((value,index) => ShowCardInfo(value, props.elsStates, props.setElsState, ref, index))
  )
})

export default Main;