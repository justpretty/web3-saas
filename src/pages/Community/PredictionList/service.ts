import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getPredictionPageList = (params) => {
  return request('/list', {
    serviceName: 'PredictionService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addPrediction = (params) => {
  return request('/add', {
    serviceName: 'PredictionService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deletePrediction = (params) => {
  return request('/del', {
    serviceName: 'PredictionService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getPredictionDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'PredictionService',
    methodName: 'getPredictionDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
