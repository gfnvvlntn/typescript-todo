import React, {PureComponent} from "react";


interface ButtonProps {
    action?: any
    id?:number
}


class Button extends PureComponent<ButtonProps> {
    render() {
        return (
           <button
               onClick={() => this.props.action(this.props.id)}>
               {this.props.children}
           </button>
        );
    }
}

export default Button