import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getContractProtocolPageList = (params) => {
  return request('/list', {
    serviceName: 'GoodsCategoryService',
    methodName: 'getList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addContractProtocol = (params) => {
  return request('/add', {
    serviceName: 'GoodsCategoryService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteContractProtocol = (params) => {
  return request('/del', {
    serviceName: 'GoodsCategoryService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getContractProtocolDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'GoodsCategoryService',
    methodName: 'getContractProtocolDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
