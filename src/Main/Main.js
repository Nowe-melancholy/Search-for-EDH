import './Main.css';
import React, { useState,useEffect } from 'react';
import GetCardList from './GetCardList'

function Main(){
  const[cardList, setCardList] = useState([]);
  const[searchConditions, setSearchConditions] = useState({})

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      GetCardList(searchConditions)
      .then(cardList => {
        cardList ? setCardList(cardList.map(cardInfo => ShowCardInfo(cardInfo))) : setCardList([])
      })
    }, 500);
    return () => {
      clearTimeout(timeoutId)
    }
  },[searchConditions])

  function handleChange(e){
    setSearchConditions({...searchConditions, "cardName":e.target.value})
  }

  return (
    <div>
      <InputSearchConditions searchWord={searchConditions.cardName} handleChange={e => handleChange(e)} />
      <div>
        {cardList}
      </div>
    </div>
  );
}

const InputSearchConditions = (props) => {
  return(
    <div>カード名　<input type="search" value={props.searchWord} onChange={e => props.handleChange(e)} /></div>
  )
}

function ShowCardInfo(cardInfo){
  const image = cardInfo.image_uris ? cardInfo.image_uris : {}
  return(
    <div className="searchResultContainer">
      <div className="cardContainer">
        <div className="item_title">日本語名</div><div className="card_item">{cardInfo.printed_name}</div>
        <div className="item_title">英語名</div><div className ="card_item">{cardInfo.name}</div>
        <div className="item_title">固有色</div><div className="card_item">{cardInfo.color_identity}</div>
        <div className="item_title">テキスト</div><div className="card_item">{cardInfo.printed_text}</div>
      </div>
      <div id="cardImage"><img src={image.small}></img></div>
    </div>
  );
}

export default Main;
