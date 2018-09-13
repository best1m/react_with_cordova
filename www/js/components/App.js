import React, {Component} from 'react';

class App extends Component {
    state = {
        test : 2132131
    }
    callTest = () => {
        this.setState({
            test : 2342342323
        })
    }

    render(){
        return(
        <div>
            <h1>pdlc controller</h1>
            <button onClick={this.callTest}>TYPE1</button>
            <button>TYPE2</button>
            <button>TYPE3</button>
            <button>TYPE4</button>
            <div>{this.state.test}</div>
        </div>
        )
    }
}

export default App;