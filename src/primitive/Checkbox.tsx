import React, {Component} from "react";


interface CheckboxProps {
    handleChange: any
    id:number
    isChecked: boolean
}


class Checkbox extends Component<CheckboxProps> {
    render() {
        return (
            <input
                type="checkbox"
                id={this.props.id.toString()}
                checked={this.props.isChecked}
                onChange={this.props.handleChange}
            />
        );
    }
}

export default Checkbox