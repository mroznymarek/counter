import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './Counter'


ReactDOM.render(
    <Counter 
        number={0}
    />,
    document.getElementById('root')
)

ReactDOM.render(<Counter />, document.getElementById('root'))

