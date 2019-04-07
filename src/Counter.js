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
            </div>
        )
    }


}

export default Counter