import request from '../../utils/bsinRequest';

// 分页查询
export const getCustomerPageList = (params) => {
  return request('/list', {
    serviceName: 'CustomerService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建
export const addCustomer = (params) => {
  return request('/add', {
    serviceName: 'CustomerService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除
export const deleteCustomer = (params) => {
  return request('/del', {
    serviceName: 'CustomerService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询详情
export const getCustomerDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'CustomerService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
