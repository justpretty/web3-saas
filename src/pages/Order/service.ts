import request from '../../utils/bsinRequest';

// 分页查询合约配置
export const getUniflyOrderPageList = (params) => {
  return request('/list', {
    serviceName: 'UniflyOrderService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addUniflyOrder = (params) => {
  return request('/add', {
    serviceName: 'UniflyOrderService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteUniflyOrder = (params) => {
  return request('/del', {
    serviceName: 'UniflyOrderService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getUniflyOrderDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'UniflyOrderService',
    methodName: 'getUniflyOrderDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
