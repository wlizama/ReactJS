var React = require('react');

class InputItem extends React.Component{
    constructor() {
        super();
        this.state = {
            valor : ""
        }
    }

    onChange(evt){
        console.log("On Change input")
        this.setState({ valor : evt.target.value });
    }

    getValor(){
        return this.state.valor;
    }

    render() {
        return (
            <input id="txtHtmlInput" type="textbox" onChange={this.onChange.bind(this)} value={this.state.valor} />
        );
    }
};

module.exports = InputItem;