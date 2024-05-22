import request from '../../../utils/bsinRequest';

// 分页查询
export const getArticlePageList = (params) => {
  return request('/list', {
    serviceName: 'ArticleService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 创建
export const addArticle = (params) => {
  return request('/add', {
    serviceName: 'ArticleService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除
export const deleteArticle = (params) => {
  return request('/del', {
    serviceName: 'ArticleService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 查询详情
export const getArticleDetail = (params) => {
  console.log('params', params);
  return request('/view', {
    serviceName: 'ArticleService',
    methodName: 'getDetail',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
