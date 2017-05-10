var React = require('react');
var InputItem = require('../Items/InputItem.jsx');

class InputBox extends React.Component{
    
    constructor() {
        super();
        this.state = {
            button_label : "Agregar"
        }
    }

    onClick(evt){
        if(this.state.button_label == "Agregar"){
            this.setState({ button_label: 'No agregar' });
        }
        else if(this.state.button_label == "No agregar"){
            this.setState({ button_label: 'Agregar' });
        }

        console.log(`Evento onClick ${JSON.stringify(this.state)}`);
    }

    render() {
        return(
            <div className="row">
                <InputItem />
                <button type="button" onClick={this.onClick.bind(this)}>{this.state.button_label}</button>
            </div>
        );
    }
};

module.exports = InputBox;