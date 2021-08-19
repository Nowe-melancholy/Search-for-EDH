import './CardLayoutContainer.css'

const CreateCardLayout = (cardInfo) => {
    return(
      <div className="cardContainer">
        <div className="item_title">カード名</div><div className="card_item">{CardName(cardInfo)}</div>
        <div className="item_title">固有色</div><div className="card_item">{cardInfo.color_identity}</div>
        <div className="item_title">テキスト</div><div className="card_item">{CardText(cardInfo)}</div>
      </div>
    );
}

const CardName = (cardInfo) => {
    
    if(cardInfo.printed_name){
        let wikiURL = "http://mtgwiki.com/wiki/" + cardInfo.printed_name + "/" + cardInfo.name
        return <div><a href={wikiURL} target="_blank" rel="noopener noreferrer">{cardInfo.printed_name} // {cardInfo.name}</a></div>
    }else{
        let wikiURL = "http://mtgwiki.com/wiki/" + cardInfo.name
        return <div><a href={wikiURL} target="_blank" rel="noopener noreferrer">{cardInfo.name}</a></div>
    }
}

const CardText = (cardInfo) => {
    if(cardInfo.printed_text){
        const cardText = cardInfo.printed_text
        return <div>{cardText}</div>
    } else {
        const cardText = cardInfo.oracle_text
        return <div>{cardText}</div>
    }
}

export default CreateCardLayout;