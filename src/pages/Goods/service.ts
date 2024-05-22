import request from '../../utils/bsinRequest';

// 分页查询合约配置
export const getGoodsPageList = (params) => {
  return request('/list', {
    serviceName: 'GoodsService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addGoods = (params) => {
  return request('/add', {
    serviceName: 'GoodsService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteGoods = (params) => {
  return request('/del', {
    serviceName: 'GoodsService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getGoodsDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'GoodsService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
