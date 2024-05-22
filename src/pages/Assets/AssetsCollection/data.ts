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
    title: '资产集合名称',
    dataIndex: 'name',
    hideInTable: true,
  },
  {
    title: '资产符号',
    dataIndex: 'symbol',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '资产ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '资产集合名称',
    width: 160,
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: '资产符号',
    width: 160,
    dataIndex: 'symbol',
    hideInSearch: true,
  },
  {
    title: '总供应量',
    width: 160,
    dataIndex: 'totalSupply',
    hideInSearch: true,
  },
  {
    title: '小数位数',
    width: 160,
    dataIndex: 'decimals',
    hideInSearch: true,
  },
  {
    title: '集合类型',
    width: 160,
    dataIndex: 'collectionType',
    hideInSearch: true,
  },
  {
    title: '上架状态',
    width: 160,
    dataIndex: 'status',
    hideInSearch: true,
  },
  {
    title: '合约地址',
    width: 160,
    dataIndex: 'contractAddress',
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
