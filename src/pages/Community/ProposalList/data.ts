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
    title: '提案名称',
    dataIndex: 'name',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },
  {
    title: '提案编号',
    dataIndex: 'proposalCode',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '提案ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '提案名称',
    width: 160,
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: '提案编号',
    width: 160,
    dataIndex: 'proposalCode',
    hideInSearch: true,
  },
  {
    title: '最少通过数',
    width: 160,
    dataIndex: 'minPassQuantity',
    hideInSearch: true,
  },
  {
    title: '投票通过率',
    width: 160,
    dataIndex: 'passRate',
    hideInSearch: true,
  },
  {
    title: '投票开始时间',
    width: 160,
    dataIndex: 'startTime',
    hideInSearch: true,
  },
  {
    title: '投票结束时间',
    width: 160,
    dataIndex: 'endTime',
    hideInSearch: true,
  },
  {
    title: '正方数',
    width: 160,
    dataIndex: 'positiveQuantity',
    hideInSearch: true,
  },
  {
    title: '反方数',
    width: 160,
    dataIndex: 'negativeQuantity',
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
