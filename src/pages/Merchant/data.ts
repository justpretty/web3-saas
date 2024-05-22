import type { ProColumns } from '@ant-design/pro-table';

export type columnsDataType = {
  order: number;
  acName: string;
  custNo: string;
  acNo: string;
  balance: string;
  custType: string;
  openAcDate: string;
  status: string;
  startTime: string;
  endTime: string;
};

const columnsData: ProColumns<columnsDataType>[] = [
  // 配置搜索框
  {
    title: '商户名称',
    dataIndex: 'merchantName',
    valueType: 'select',
    hideInTable: true,
  },
  {
    title: '客户号',
    dataIndex: 'customerNo',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '商户ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '商户名称',
    width: 160,
    dataIndex: 'merchantName',
    hideInSearch: true,
  },
  {
    title: '客户号',
    width: 160,
    dataIndex: 'customerNo',
    hideInSearch: true,
  },
  {
    title: '企业工商号',
    width: 160,
    dataIndex: 'businessNo',
    hideInSearch: true,
  },
  {
    title: '企业工商号',
    width: 160,
    dataIndex: 'businessNo',
    hideInSearch: true,
  },
  {
    title: '法人姓名',
    width: 160,
    dataIndex: 'legalPersonName',
    hideInSearch: true,
  },
  {
    title: '联系电话',
    width: 160,
    dataIndex: 'phone',
    hideInSearch: true,
  },
  {
    title: '商户审核状态',
    width: 160,
    dataIndex: 'authenticationStatus',
    hideInSearch: true,
  },
  {
    title: '商户状态',
    width: 160,
    dataIndex: 'status',
    hideInSearch: true,
  },
  {
    title: '商户类型',
    width: 160,
    dataIndex: 'type',
    hideInSearch: true,
  },
  {
    title: '创建时间',
    width: 160,
    dataIndex: 'createTime',
    hideInSearch: true,
  },
  {
    title: '操作',
    width: 100,
    hideInSearch: true,
    dataIndex: 'action',
    fixed: 'right',
  },
];

export default columnsData;
