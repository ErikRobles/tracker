import React, { Fragment } from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <Fragment>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </Fragment>
  );
};

export default Tasks;
