import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getDigitalAssetsCollectionPageList = (params) => {
  return request('/list', {
    serviceName: 'DigitalAssetsCollectionService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addDigitalAssetsCollection = (params) => {
  return request('/add', {
    serviceName: 'DigitalAssetsCollectionService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteDigitalAssetsCollection = (params) => {
  return request('/del', {
    serviceName: 'DigitalAssetsCollectionService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getDigitalAssetsCollectionDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'DigitalAssetsCollectionService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
