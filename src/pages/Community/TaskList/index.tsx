import React, { useState } from 'react';
import TaskList from './taskList';
import AddTask from './addTask';

export default () => {
  // 控制是否展示详情组件
  const [isLoadAddTask, setIsLoadAddTask] = useState(false);
  // 详情信息
  const [positionInfo, setPositionInfo] = useState({});

  return (
    <div>
      {/* CastingDetail组件 Casting铸造组件*/}
      {isLoadAddTask ? (
        <AddTask
        setIsLoadAddTask={setIsLoadAddTask}
        />
      ) : (
        <TaskList
        setIsLoadAddTask={setIsLoadAddTask}
        />
      )}
    </div>
  );
};
