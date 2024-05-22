import request from '../../../utils/bsinRequest';

// 分页查询合约配置
export const getContractProtocolPageList = (params) => {
  return request('/list', {
    serviceName: 'AdminContractProtocolService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建合约配置
export const addContractProtocol = (params) => {
  return request('/add', {
    serviceName: 'AdminContractProtocolService',
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
    serviceName: 'AdminContractProtocolService',
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
    serviceName: 'AdminContractProtocolService',
    methodName: 'getContractProtocolDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
}

// 查询积分铸造明细
export const getBondingCurveTokenJournalPageList = (params) => {
  console.log('params', params);
  return request('/', {
    serviceName: 'BondingCurveTokenService',
    methodName: 'getBondingCurveTokenJournalPageList',
    version: "1.0",
    bizParams: {
      ...params,
    },
  });
};

// 查询积分曲线点
export const getBondingCurveTokenJournalList = (params) => {
  console.log('params', params);
  return request('/', {
    serviceName: 'BondingCurveTokenService',
    methodName: 'getBondingCurveTokenJournalList',
    version: "1.0",
    bizParams: {
      ...params,
    },
  });
};


