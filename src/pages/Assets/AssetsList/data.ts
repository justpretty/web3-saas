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
    title: '资产名称',
    dataIndex: 'assetsName',
    hideInTable: true,
  },
  {
    title: '资产类型',
    dataIndex: 'assetsType',
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
    title: '资产名称',
    width: 160,
    dataIndex: 'assetsName',
    hideInSearch: true,
  },
  {
    title: '资产类型',
    width: 160,
    dataIndex: 'assetsType',
    hideInSearch: true,
  },
  {
    title: '领取方式',
    width: 160,
    dataIndex: 'obtainMethod',
    hideInSearch: true,
  },
  {
    title: '资产数量',
    width: 160,
    dataIndex: 'quantity',
    hideInSearch: true,
  },
  {
    title: '库存',
    width: 160,
    dataIndex: 'inventory',
    hideInSearch: true,
  },
  {
    title: '协议描述',
    width: 160,
    dataIndex: 'description',
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
