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
    let cardName

    if(cardInfo.printed_name){
        return <div>{cardInfo.printed_name} // {cardInfo.name}</div>
    }else{
        return <div>{cardInfo.name}</div>
    }
}

const CardText = (cardInfo) => {
    if(cardInfo.printed_text){
        return <div>{cardInfo.printed_text}</div>
    } else {
        return <div>{cardInfo.oracle_text}</div>
    }
}

export default CreateCardLayout;