import './SearchContainer.css'

const InputSearchConditions = (props) => {
  return (
    <div className="searchContainer">
      <div className="search_title">カード名</div>
      <div className="search_item"><input type="search" value={props.searchWord} onChange={e => props.handleCardNameChange(e)} /></div>

      <div className="search_title">固有色</div>
      <div className="search_item">
        <input type="checkbox" name="idColor" value="W" onChange={e => props.handleIdColorChange(e)}></input>白
        <input type="checkbox" name="idColor" value="U" onChange={e => props.handleIdColorChange(e)}></input>青
        <input type="checkbox" name="idColor" value="B" onChange={e => props.handleIdColorChange(e)}></input>黒
        <input type="checkbox" name="idColor" value="R" onChange={e => props.handleIdColorChange(e)}></input>赤
        <input type="checkbox" name="idColor" value="G" onChange={e => props.handleIdColorChange(e)}></input>緑
        <input type="checkbox" name="idColor" value="C" onChange={e => props.handleIdColorChange(e)}></input>無色
      </div>

      <div className="search_title">カードタイプ</div>
      <div className="search_item">
        <input type="checkbox" name="cardType" value="creature" onChange={e => props.handleCardTypeChange(e)}></input>クリーチャー
        <input type="checkbox" name="cardType" value="artifact" onChange={e => props.handleCardTypeChange(e)}></input>アーティファクト
        <input type="checkbox" name="cardType" value="sorcery" onChange={e => props.handleCardTypeChange(e)}></input>ソーサリー
        <input type="checkbox" name="cardType" value="instant" onChange={e => props.handleCardTypeChange(e)}></input>インスタント
        <input type="checkbox" name="cardType" value="enchant" onChange={e => props.handleCardTypeChange(e)}></input>エンチャント
        <input type="checkbox" name="cardType" value="planeswalker" onChange={e => props.handleCardTypeChange(e)}></input>プレインズウォーカー
        <input type="checkbox" name="cardType" value="land" onChange={e => props.handleCardTypeChange(e)}></input>土地
        <input type="checkbox" name="cardType" value="legendary" onChange={e => props.handleCardTypeChange(e)}></input>伝説
      </div>
    </div>

  )
}

export default InputSearchConditions;