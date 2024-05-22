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
    title: '预测名称',
    dataIndex: 'name',
    hideInTable: true,
  },
  {
    title: '预测编号',
    dataIndex: 'predictionCode',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '预测ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '预测名称',
    width: 160,
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: '预测编号',
    width: 160,
    dataIndex: 'predictionCode',
    hideInSearch: true,
  },
  {
    title: '选项类型',
    width: 160,
    dataIndex: 'optionType',
    hideInSearch: true,
  },
  {
    title: '正方投票数',
    width: 160,
    dataIndex: 'positiveQuantity',
    hideInSearch: true,
  },
  {
    title: '反方投票数',
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
