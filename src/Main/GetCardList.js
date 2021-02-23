import React, { useState } from 'react';

const API = 'https://api.scryfall.com/cards/search?q=name:'

const GetCardList = (searchCondition) => {
    return new Promise(function(resolve){
      let cardList = [];
      let oracleIdSet = new Set();

      //日本語のリストを先に取得
      fetch(API + searchCondition.cardName + '+lang:ja')
      .then(res => res.json())
      .then(json => {
        if(json.data) cardList = Object.keys(json.data).map(function (key) {return json.data[key]});
        cardList.forEach(cardInfo => oracleIdSet.add(cardInfo.oracle_id))
      })
      .then(() => {

        //英語のリストを取得し日本語のリストに追加
        fetch(API + searchCondition.cardName)
        .then(res => res.json())
        .then(json => json.data)
        .then(data => {
          if(data) data.forEach(
            cardInfo => {
              if(!oracleIdSet.has(cardInfo.oracle_id)) cardList.push(cardInfo)
            })
        })
        .then(() => resolve(cardList) )
      })
    })
}


export default GetCardList;