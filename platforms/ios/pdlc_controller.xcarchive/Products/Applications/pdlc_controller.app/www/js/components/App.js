import React, {Component} from 'react';

class App extends Component {
    state = {
        test : null
    }
    test = () => {
        this.setState({
            test : '21312321'
        })
    }
    render(){
        return(
        <div>
            <h1>pdlc controller</h1>
            <button onclick={this.test}>TYPE1</button>
            <button>TYPE2</button>
            <button>TYPE3</button>
            <button>TYPE4</button>
            {this.state.test}
        </div>
        )
    }
}

export default App;