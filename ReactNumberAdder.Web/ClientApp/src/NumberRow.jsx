import React from "react";

class NumberRow extends React.Component {

    render() {
        const { number, isSelected, isLocked, onSelectClick } = this.props;
        return <tr>
        <td>{number}</td>
        <td>
            {!isSelected ? <button className="btn btn-primary" onClick={onSelectClick}>Add to Selected</button>
                : <button disabled={isLocked} className="btn btn-danger" onClick={onSelectClick}>Remove from Selected</button>
            }
        </td>
    </tr>
    }
}
export default NumberRow;