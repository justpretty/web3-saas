import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getProposalPageList = (params) => {
  return request('/list', {
    serviceName: 'ProposalService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addProposal = (params) => {
  return request('/add', {
    serviceName: 'ProposalService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteProposal = (params) => {
  return request('/del', {
    serviceName: 'ProposalService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getProposalDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'ProposalService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
