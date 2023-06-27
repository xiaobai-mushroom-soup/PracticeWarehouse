import React from 'react'

class HelloWorld extends React.Component {
    constructor(){
        super()
        this.state = {
            msg:'你好师姐'
        }
    }
    render(){
        return (
            <div>
                {this.state.msg}
            </div>
        )
    }
}

export default HelloWorld