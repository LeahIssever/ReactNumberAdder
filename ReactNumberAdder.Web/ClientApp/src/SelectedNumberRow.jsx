import React from "react";

class SelectedNumberRow extends React.Component {

    render() {
        const { number, isLocked, onLockClick } = this.props;

        return <tr>
            <td>{number}</td>
            <td>
                {isLocked ? <button className="btn btn-danger" onClick={onLockClick}>Unlock</button>
                    : <button className="btn btn-primary" onClick={onLockClick}>Lock</button>
                }
            </td>
        </tr>
    }
}
export default SelectedNumberRow;