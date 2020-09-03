import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

    }


    componentDidMount() {
        console.log("componentDidMount");
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");

        document.title = `Clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <button onClick={()=> {
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