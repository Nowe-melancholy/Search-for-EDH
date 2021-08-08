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

export default InputSearchConditions;