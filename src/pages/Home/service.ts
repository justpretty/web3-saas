import request from '@/utils/bsinRequest';

// 获取合约规则
export const getContractConfigInfos = (params: any) => {
  return request('/getDictItemPageList', {
    serviceName: 'AdminContractConfigService',
    methodName: 'getContractConfigInfos',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 发行接口
export const lssueToken = (params: any) => {
  return request('/lssueToken', {
    serviceName: 'AdminDigitalTokenService',
    methodName: 'lssueToken',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
