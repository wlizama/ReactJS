var React = require('react');
var InputItem = require('../Items/InputItem.jsx');

class InputBox extends React.Component{
    
    constructor() {
        super();
        this.state = {
            button_label : "Agregar",
            salida : ""
        }
    }

    onClick(evt){
        if (this.refs.InputTask.getValor() == "") 
            this.setState({ salida : "El campo no puede estar vacio" });
        else
            this.setState({ salida : "Ok!" });
        
        console.log(`Valor Referencia > ${this.refs.InputTask.getValor()}`);
        console.log(`Evento onClick ${JSON.stringify(this.state)}`);
    }

    render() {
        return(
            <div className="row">
                <InputItem ref="InputTask" />
                <button type="button" onClick={this.onClick.bind(this)}>{this.state.button_label}</button>
                <label>{this.state.salida}</label>
            </div>
        );
    }
};

module.exports = InputBox;