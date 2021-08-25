const API = 'https://api.scryfall.com/cards/search?order=cmc&q='

const GetCardList = (searchConditions, setCardList, setResultCount) => {
  let cardList = [];
  let oracleIdSet = new Set();
  let resultCount = 0

  let SearchURL = API

  if (searchConditions.cardName) SearchURL += ('+name:' + searchConditions.cardName);
  if (searchConditions.idColor) SearchURL += ('+id>=' + searchConditions.idColor);
  if (searchConditions.cardType) searchConditions.cardType.forEach((cardType) => { SearchURL += (' t:' + cardType); })


  if (SearchURL === API) {
    setCardList(cardList)
    setResultCount(0)
    return
  }

  //日本語のリストを先に取得
  fetch(SearchURL + '+lang:ja')
    .then(res => res.json())
    .then(json => {
      if (json.data) {
        cardList = Object.keys(json.data).map(function (key) { return json.data[key] })
        resultCount = json.total_cards
      }
      cardList.forEach(cardInfo => oracleIdSet.add(cardInfo.oracle_id))
    })
    .then(() => {

      //英語のリストを取得し日本語のリストに追加
      fetch(SearchURL)
        .then(res => res.json())
        .then(json => {
          if (json.total_cards) resultCount = json.total_cards
          return json.data
        })
        .then(data => {
          if (data) data.forEach(
            cardInfo => {
              if (!oracleIdSet.has(cardInfo.oracle_id)) cardList.push(cardInfo)
            })
        })
        .then(() => {
          setCardList(cardList.sort(compareCMC))
          setResultCount(resultCount)
        })
    })
}

const compareCMC = (a, b) => {
  return a.cmc < b.cmc ? -1 : 1;
}


export default GetCardList;