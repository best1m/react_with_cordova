import React, {Component} from 'react';
import bluetoothle from '../../../plugins/cordova-plugin-bluetoothle/www/bluetoothle'

class App extends Component {
    state = {
        test : 2132131
    }
    callTest = () => {
        this.setState({
            test : 2342342323
        })
        bluetoothle.initialize(
            res => {
                console.log(res);
                alert(res);
            },
        );
        // bluetoothle.startScan(
        //     res => {
        //         console.log(res);
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // );
        
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