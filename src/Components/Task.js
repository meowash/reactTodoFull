import React from 'react';

const Task = ({task, ...props}) => {

    const className = 'task ' + (task.done ? 'task-done' : '');
    const classNameBtn = 'task ' + (task.done ? 'btn-done' : '')


 
    return(
        <div className="task">
            <div  className={`task__intro ${className}`} contentEditable="true"> <span className="task-id" contentEditable="false">{task.id +1}.  </span>{task.title}</div>
            
            <button className={`btn__del btn-checked ${classNameBtn}`}  onClick={props.doneTask}>
            <svg className="task__done-svg"width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
            <button className="btn__del"  onClick={props.deleteTask}  >
                 <svg height="12pt" viewBox="-64 0 512 512" width="12pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 80h-32v-48h-64v48h-32v-80h128zm0 0" fill="#62808c"/><path d="m304 512h-224c-26.507812 0-48-21.492188-48-48v-336h320v336c0 26.507812-21.492188 48-48 48zm0 0" fill="#e76e54"/><path d="m384 160h-384v-64c0-17.671875 14.328125-32 32-32h320c17.671875 0 32 14.328125 32 32zm0 0" fill="#77959e"/><path d="m260 260c-6.246094-6.246094-16.375-6.246094-22.625 0l-41.375 41.375-41.375-41.375c-6.25-6.246094-16.378906-6.246094-22.625 0s-6.246094 16.375 0 22.625l41.375 41.375-41.375 41.375c-6.246094 6.25-6.246094 16.378906 0 22.625s16.375 6.246094 22.625 0l41.375-41.375 41.375 41.375c6.25 6.246094 16.378906 6.246094 22.625 0s6.246094-16.375 0-22.625l-41.375-41.375 41.375-41.375c6.246094-6.25 6.246094-16.378906 0-22.625zm0 0" fill="#fff"/></svg>
            </button>
        </div>
    )
}

export default Task;