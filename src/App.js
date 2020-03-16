import React from 'react';
import './App.css';
import Task from './Components/Task';
import Input from './Components/Input'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
  }

  componentDidMount= () => {
    let LocalTask = JSON.parse(localStorage.getItem('LocalTask'));
    if (LocalTask) {
      this.setState({tasks : LocalTask});
    }
  }

   doneTask = (id,tasks) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(({tasks}) =>{
      if(tasks[index].done) {
      tasks[index].done = false;
      } else {
      tasks[index].done = true;
      }
      let a = JSON.stringify(tasks);
      localStorage.setItem('LocalTask', a)
      return tasks;
    })
  }

  deleteTask = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);

      const newArray = [
        ...tasks.slice(0, idx),
        ...tasks.slice(idx + 1)
      ];

      let local = JSON.stringify(newArray);
      localStorage.setItem('LocalTask', local);

      return {
        tasks: newArray
      };
    });

  };
addTask = (task, id) => {
    this.setState(({tasks}) => {
      tasks.push( {
        id: tasks.length/*  ==! 0 ? tasks.length : 0 */, 
        title: task, 
        done: false
      })
      
      let a = JSON.stringify(tasks);
      localStorage.setItem('LocalTask', a)
      return tasks
    })
  } 
   
  render() {
    const {tasks} = this.state; 
    const activeTasks = tasks.filter(task => !task.done);
    let doneTasks = tasks.filter(task => task.done);
    
    return(
      <div className="App">
        <div className="container">

          <h1 className="main__title"> Входящие задачи</h1>
          <h3>Выполненно задач: {doneTasks.length}</h3>
          {!tasks.length && <h2 className="main__title-notasks">Задачи отсутствуют</h2>}
          {[...activeTasks,...doneTasks].map(task => (
            <Task className="task" 
            task={task} 
            key={task.id}
            deleteTask={() => this.deleteTask(task.id)}
            doneTask={() => this.doneTask(task.id)}
            />
          ))}
          <Input
          addInputBtn={this.addInputBtn}
          addTask={this.addTask} 
          />
          
        </div>
      </div>
    )
  }
}
export default App;
