var React = require('react');
var InputBox = require('../boxes/InputBox.jsx');
var ResultBox = require('../boxes/ResultBox.jsx');

class Box extends React.Component{
    render() {
        return(
            <div className="container">
                <InputBox />
                <ResultBox />
            </div>
        );
    }
};

module.exports = Box;