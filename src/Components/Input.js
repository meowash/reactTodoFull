import React from 'react';

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            btnAddInput: true,
            btnCloseBtn: false
        };
    }
    addInputBtn = () =>{
        const currentState = this.state.btnCloseBtn;
        this.setState({btnCloseBtn: !currentState});
        const stateForAddInput = this.state.btnAddIpnut;
        this.setState({btnAddInput: stateForAddInput});
      }
    addTask = () =>{
        const {input} = this.state;
        if (input) {
            this.props.addTask(input);
            this.setState({input: ''});
        }
    }
    inputChange = (e) => {
        this.setState({ input: e.target.value});
    }
    handleEnter = (event) => {
        if(event.key ==='Enter') this.addTask();
    }

    render() {
        const {input} = this.state; 
        return (
            <div className="input__intro">
               <button className={`btn__addInput ${this.state.btnCloseBtn ? 'deleteBtnForInput' : null}`}
                onClick={this.addInputBtn}>
                    <span className="svg__plus">
                        <svg height="12px" viewBox="0 0 448 448" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
                    </span>
                    Добавить задачу
                    </button>
                <div className={this.state.btnAddInput ? 'stateForAddInput' : null}>
                    <input type="text" 
                    className="input" 
                    placeholder="Введите задачу"
                    onChange={this.inputChange}
                    value={input} 
                    onKeyPress={this.handleEnter}
                    />
                    <button onClick={this.addTask} className="btn">
                    <svg id="Capa_1" enableBackground="new 0 0 551.13 551.13" height="20" viewBox="0 0 551.13 551.13" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m275.565 0c-151.944 0-275.565 123.621-275.565 275.565s123.621 275.565 275.565 275.565 275.565-123.621 275.565-275.565-123.621-275.565-275.565-275.565zm0 516.685c-132.955 0-241.119-108.164-241.119-241.119s108.164-241.12 241.119-241.12 241.12 108.164 241.12 241.119-108.165 241.12-241.12 241.12z"/><path d="m292.788 137.783h-34.446v120.56h-120.56v34.446h120.56v120.56h34.446v-120.56h120.56v-34.446h-120.56z"/></svg>
                    </button>
                </div>
            </div>
        )
    }
}
export default Input;