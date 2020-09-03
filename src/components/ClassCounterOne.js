import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            count: 0
        }

    }


    componentDidMount() {
        console.log("componentDidMount");
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updating document title");

        document.title = `Clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                }} />
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}


export default ClassCounterOne