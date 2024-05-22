import React, { useState } from 'react';
import CouponList from './couponList';
import AddCoupon from './addCoupon';

export default () => {
  // 控制是否展示详情组件
  const [isLoadAddCoupon, setIsLoadAddCoupon] = useState(false);
  // 详情信息
  const [positionInfo, setPositionInfo] = useState({});

  return (
    <div>
      {/* CastingDetail组件 Casting铸造组件*/}
      {isLoadAddCoupon ? (
        <AddCoupon
        setIsLoadAddCoupon={setIsLoadAddCoupon}
        />
      ) : (
        <CouponList
        setIsLoadAddCoupon={setIsLoadAddCoupon}
        />
      )}
    </div>
  );
};
