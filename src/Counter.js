import React from 'react'


class Counter extends React.Component {
    state = {
        number: this.props.number
    }

    adding1() {
        this.setState({ number: this.state.number + 1 })
    }

    substract1() {
        this.setState({ number: this.state.number - 1 })
    }

    adding5() {
        this.setState({ number: this.state.number + 5 })
    }

    substract5() {
        this.setState({ number: this.state.number - 5 })
    }

    reset() {
        this.setState({ number: this.props.number })
    }



    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    onClick={this.adding1}
                >
                    + 1
                </button>
                <button
                    onClick={this.substract1}
                >
                    - 1
                </button>
                <button
                    onClick={this.adding5}
                >
                    + 5
                </button>
                <button
                    onClick={this.substract5}
                >
                    - 5
                </button>
                <button
                    onClick={() => this.reset}
                >
                    Reset
                </button>
            </div>
        )
    }


}

export default Counter