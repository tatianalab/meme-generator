import React from 'react'
import MemeComponent from './MemeComponent'

class MemeGenerator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      topText: "",
      bottomText: "",
      rdmImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({allMemeImgs: memes})
      })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const rdmIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMeme = this.state.allMemeImgs[rdmIndex].url;
    this.setState({
      rdmImage: randomMeme
    })
  }

  render(){
    return (
      <MemeComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
        />
      )
  }
}

export default MemeGenerator
