import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getStorePageList = (params) => {
  return request('/list', {
    serviceName: 'StoreService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addStore = (params) => {
  return request('/add', {
    serviceName: 'StoreService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteStore = (params) => {
  return request('/del', {
    serviceName: 'StoreService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getStoreDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'StoreService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
