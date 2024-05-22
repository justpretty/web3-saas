import React, { useState } from 'react';
import EquityCardList from './equityCardList';
import AddEquityCard from './addEquityCard';

export default () => {
  // 控制是否展示详情组件
  const [isLoadAddEquityCard, setIsLoadAddEquityCard] = useState(false);
  // 详情信息
  const [positionInfo, setPositionInfo] = useState({});

  return (
    <div>
      {/* CastingDetail组件 Casting铸造组件*/}
      {isLoadAddEquityCard ? (
        <AddEquityCard
        setIsLoadAddEquityCard={setIsLoadAddEquityCard}
        />
      ) : (
        <EquityCardList
        setIsLoadAddEquityCard={setIsLoadAddEquityCard}
        />
      )}
    </div>
  );
};
