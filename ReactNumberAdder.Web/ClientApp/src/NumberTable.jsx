import React from "react";
import NumberRow from "./NumberRow";
import SelectedNumberRow from "./SelectedNumberRow";

class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    onAddClick = () => {
        const { numbers } = this.state;
        const num = Math.floor(Math.random() * 1000) + 1;
        this.setState({ numbers: [...numbers, num] });
    }

    onSelectClick = (num) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(num)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(n => n !== num) });
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, num] });
        }
    }

    onLockClick = (num) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(num)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(n => n !== num) });
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, num] });
        }
    }

    getNumberTable = () => {
        const { numbers, selectedNumbers, lockedNumbers } = this.state;
        return <div className="row">
            <div className="col-md-4 mt-3">
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {numbers.map(n => <NumberRow
                            number={n}
                            isSelected={selectedNumbers.includes(n)}
                            isLocked={lockedNumbers.includes(n)}
                            onSelectClick={() => this.onSelectClick(n)}
                            onLockClick={() => this.onLockClick(n)} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }

    getSelectedNumberTable = () => {
        const { selectedNumbers, lockedNumbers } = this.state;
        selectedNumbers.forEach(n => console.log(lockedNumbers.includes(n)));
        return <div className="row">
            <div className="col-md-4 mt-3">
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Lock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedNumbers.map(n => <SelectedNumberRow
                            number={n}
                            isLocked={lockedNumbers.includes(n)}
                            onLockClick={() => this.onLockClick(n)} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }

    render() {
        return <><div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-success btn-lg w-100" onClick={this.onAddClick}>Add</button>
                </div>
            </div>
            {this.getNumberTable()}
            {this.getSelectedNumberTable()}
        </div>
        </>
    }
}

export default NumberTable;