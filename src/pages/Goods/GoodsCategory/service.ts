import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getGoodsCategoryPageList = (params) => {
  return request('/list', {
    serviceName: 'GoodsCategoryService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

export const getGoodsCategoryList = (params) => {
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
export const addGoodsCategory = (params) => {
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
export const deleteGoodsCategory = (params) => {
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
export const getGoodsCategoryDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'GoodsCategoryService',
    methodName: 'getGoodsCategoryDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
