import React, { useState } from 'react';
import ActivityList from './activityList';
import AddActivity from './addActivity';

export default () => {
  // 控制是否展示详情组件
  const [isLoadAddActivity, setIsLoadAddActivity] = useState(false);
  // 详情信息
  const [positionInfo, setPositionInfo] = useState({});

  return (
    <div>
      {/* CastingDetail组件 Casting铸造组件*/}
      {isLoadAddActivity ? (
        <AddActivity
        setIsLoadAddActivity={setIsLoadAddActivity}
        />
      ) : (
        <ActivityList
        setIsLoadAddActivity={setIsLoadAddActivity}
        />
      )}
    </div>
  );
};
