import React from "react";

// Menampilkan data count
function CounterDisplay ({count}) {
    return <p>{count}</p>;
}

// tambah count
function IncreaseButton ({increase}) {
    return (
        <div>
            <button onClick={increase}>+ Increase</button>
        </div>
    )
}

// reset count
function ResetButton({reset}) {
    return (
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

class Counter extends React.Component {

    // Menyimpan nilai count dalam this.state pada constructer
    constructor(props) {
        super(props);

        // inisialisasi nilai count di dalam state (akses state)
        this.state = {
            count: 0
        };
    

    // binding event handler (diikat)
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    // event handler
    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    
    render() {
        return (
            <div>
                <IncreaseButton  increase={this.onIncreaseEventHandler}/>
                <CounterDisplay count={this.state.count} />
                <ResetButton  reset={this.onResetEventHandler}/>
            </div>
        );
    }
}

export default Counter;