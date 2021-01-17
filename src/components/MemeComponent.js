import React from 'react'

function MemeComponent (props){
  return(
      <div>
        <form className="meme-form" onSubmit={props.handleSubmit} >
          <input type="text"
                 placeholder="Top Text"
                 name="topText"
                 value={props.data.topText}
                 onChange={props.handleChange} />
          <input type="text"
                 placeholder="Bottom Text"
                 name="bottomText"
                 value={props.data.bottomText}
                 onChange={props.handleChange} />
          <button>Generate my Meme!</button>
        </form>
        <div className="meme">
        <img src={props.data.rdmImage} alt="random meme" />
        <h2 className="top">{props.data.topText}</h2>
        <h2 className="bottom">{props.data.bottomText}</h2>
        </div>
      </div>
    )
}

export default MemeComponent;
