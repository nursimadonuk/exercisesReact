import React from 'react'
import PropTypes from 'prop-types'

class Decrement extends React.Component {
    constructor(props) {
        super()
        this.state = {
            number: props.number

        }
        this.dec = this.dec.bind(this)
    }
    dec() {
        if(this.state.number > 0) {
            this.setState({number: this.state.number -1})
        }else {
            alert("cannot be less than 0")
            this.setState({number: 5})
        }
    }
    render() {
        return <div>
            <h1 id="number">{this.state.number}</h1>
            <button onClick={this.dec}>Decrement</button>
        </div>
    }
}


Decrement.propTypes = {
    number: PropTypes.number.isRequired
}

export default Decrement;
