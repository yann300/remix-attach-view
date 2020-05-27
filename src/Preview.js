import React from "react";
import { remixClient } from './RemixClient'

export class Preview extends React.Component {

  constructor(props) {
    super(props)
    this.state = { html: '' }
    remixClient.listenOnNewRender((html, caller) => {
      this.setState({ html, caller })
    })
  }

  onClear () {
    if (localStorage) localStorage.clear()
    this.setState({ html: '', caller: null })
  }

  render() {
    return (
      <div>
    {this.state.html ? <span>from <i>{ this.state.caller}</i></span> : ''}
    {this.state.html ? <button className="btn-primary float-sm-right" onClick={this.onClear.bind(this)} > Clear </button> : ''}
    <div dangerouslySetInnerHTML={{__html: this.state.html}}> 
    </div></div>
    )
  }
}
