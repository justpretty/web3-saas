import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getActivityPageList = (params) => {
  return request('/list', {
    serviceName: 'ActivityService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addActivity = (params) => {
  return request('/add', {
    serviceName: 'ActivityService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteActivity = (params) => {
  return request('/del', {
    serviceName: 'ActivityService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getActivityDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'ActivityService',
    methodName: 'getActivityDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
