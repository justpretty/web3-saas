import request from '../../utils/bsinRequest';

// 分页查询合约配置
export const getMerchantPageList = (params) => {
  return request('/list', {
    serviceName: 'MerchantService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addMerchant = (params) => {
  return request('/add', {
    serviceName: 'MerchantService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteMerchant = (params) => {
  return request('/del', {
    serviceName: 'MerchantService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getMerchantDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'MerchantService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
