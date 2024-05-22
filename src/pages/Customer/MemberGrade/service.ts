import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getGradeList = (params) => {
  return request('/list', {
    serviceName: 'GradeService',
    methodName: 'getList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addGrade = (params) => {
  return request('/add', {
    serviceName: 'GradeService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteGrade = (params) => {
  return request('/del', {
    serviceName: 'GradeService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getGradeDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'GradeService',
    methodName: 'getGradeDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
