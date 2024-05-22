import React, { useState } from 'react';
import GoodsList from './goodsList';
import AddGoods from './addGoods';

export default () => {
  // 控制是否展示详情组件
  const [isLoadAddGoods, setIsLoadAddGoods] = useState(false);
  // 详情信息
  const [positionInfo, setPositionInfo] = useState({});

  return (
    <div>
      {/* CastingDetail组件 Casting铸造组件*/}
      {isLoadAddGoods ? (
        <AddGoods
          setIsLoadAddGoods={setIsLoadAddGoods}
        />
      ) : (
        <GoodsList
          setIsLoadAddGoods={setIsLoadAddGoods}
        />
      )}
    </div>
  );
};
