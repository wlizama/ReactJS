var React = require('react');
var InputItem = require('../Items/InputItem.jsx');

class InputBox extends React.Component{
    
    onClick(evt){
        console.log(`Evento onClick ${evt.target.type}`);
    }

    render() {
        return(
            <div className="row">
                <InputItem />
                <button type="button" onClick={this.onClick}>Add</button>
            </div>
        );
    }
};

module.exports = InputBox;