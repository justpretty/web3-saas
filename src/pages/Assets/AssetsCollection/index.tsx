import React, { useState } from 'react';
import AssetsCollection from './assetsCollection';
import IssueAssets from './issueAssets';

export default () => {
  // 控制是否展示详情组件
  const [isLoadIssueAssets, setIsLoadIssueAssets] = useState(false);
  // 详情信息
  const [positionInfo, setPositionInfo] = useState({});

  return (
    <div>
      {/* CastingDetail组件 Casting铸造组件*/}
      {isLoadIssueAssets ? (
        <IssueAssets
        setIsLoadIssueAssets={setIsLoadIssueAssets}
        />
      ) : (
        <AssetsCollection
        setIsLoadIssueAssets={setIsLoadIssueAssets}
        />
      )}
    </div>
  );
};
