import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getCommitteeMemberPageList = (params) => {
  return request('/list', {
    serviceName: 'CommitteeMemberService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addCommitteeMember = (params) => {
  return request('/add', {
    serviceName: 'CommitteeMemberService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteCommitteeMember = (params) => {
  return request('/del', {
    serviceName: 'CommitteeMemberService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getCommitteeMemberDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'CommitteeMemberService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
