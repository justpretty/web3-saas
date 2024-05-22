import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getMintJournalPageList = (params) => {
  return request('/list', {
    serviceName: 'MintJournalService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addMintJournal = (params) => {
  return request('/add', {
    serviceName: 'MintJournalService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除合约配置
export const deleteMintJournal = (params) => {
  return request('/del', {
    serviceName: 'MintJournalService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询合约配置详情
export const getMintJournalDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'MintJournalService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
