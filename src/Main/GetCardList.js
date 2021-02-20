import React from 'react';

const API = 'https://api.scryfall.com/cards/search?q=lang:ja+name='

const GetCardList = (searchCondition) => {
    return new Promise(function(resolve){
        fetch(API + searchCondition.cardName)
        .then(res => res.json())
        .then(data => {resolve(data.data)})
      })
}


export default GetCardList;