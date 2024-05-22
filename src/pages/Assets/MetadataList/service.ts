import request from '@/utils/bsinRequest';

// 列表数据请求
export const getMetadataFileList = (params) => {
  return request('/getPageList', {
    serviceName: 'MetadataFileService',
    methodName: 'getPageList',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 新增元数据
export const addMetadataFile = (params) => {
  return request('/add', {
    serviceName: 'MetadataFileService',
    methodName: 'add',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};

// 删除元数据
export const deleteMetadataFile = (params) => {
  return request('/delete', {
    serviceName: 'MetadataFileService',
    methodName: 'delete',
    version: '1.0',
    bizParams: {
      ...params,
    },
  });
};
