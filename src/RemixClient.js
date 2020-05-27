
import { connectIframe, listenOnThemeChanged, PluginClient } from '@remixproject/plugin'

export class RemixClient extends PluginClient {

    constructor() {
        super();
        this.methods = ["render"];
        connectIframe(this);
        listenOnThemeChanged(this);
    }

    listenOnNewRender = (cb) => {
      this.cb = cb
    }
   
    render = (html) => {
      if (localStorage) localStorage.clear()
      this.cb(html, this.currentRequest.from)
    }
  }


export const remixClient = new RemixClient()
