import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getDigitalAssetsItemPageList = (params) => {
  return request('/list', {
    serviceName: 'DigitalAssetsItemService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addDigitalAssetsItem = (params) => {
  return request('/add', {
    serviceName: 'DigitalAssetsItemService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteDigitalAssetsItem = (params) => {
  return request('/del', {
    serviceName: 'DigitalAssetsItemService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getDigitalAssetsItemDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'DigitalAssetsItemService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
