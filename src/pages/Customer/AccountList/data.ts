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
    title: '客户号',
    dataIndex: 'customerNo',
    hideInTable: true,
  },
  {
    title: '账户名称',
    dataIndex: 'name',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },
  {
    title: '账户类别',
    dataIndex: 'category',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '客户号',
    width: 190,
    dataIndex: 'customerNo',
    hideInSearch: true,
  },
  {
    title: '账户名称',
    width: 160,
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: '账户类别',
    width: 160,
    dataIndex: 'category',
    hideInSearch: true,
  },
  {
    title: '账户类型',
    width: 160,
    dataIndex: 'type',
    hideInSearch: true,
  },
  {
    title: '账户状态',
    width: 160,
    dataIndex: 'status',
    hideInSearch: true,
  },
  {
    title: '账户余额',
    width: 160,
    dataIndex: 'balance',
    hideInSearch: true,
  },
  {
    title: '累计金额',
    width: 160,
    dataIndex: 'cumulativeAmount',
    hideInSearch: true,
  },
  {
    title: '冻结金额',
    width: 160,
    dataIndex: 'freezeAmount',
    hideInSearch: true,
  },
  {
    title: '创建者',
    width: 160,
    dataIndex: 'createBy',
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
