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
    title: '等级名称',
    dataIndex: 'name',
  },
  {
    title: '等级编号',
    dataIndex: 'protocolCode',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '等级ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '等级名称',
    width: 160,
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: '等级级数',
    width: 160,
    dataIndex: 'gradeNum',
    hideInSearch: true,
  },
  {
    title: '等级编号',
    width: 160,
    dataIndex: 'gradeCode',
    hideInSearch: true,
  },
  {
    title: '等级图标',
    width: 160,
    dataIndex: 'gradeImage',
    hideInSearch: true,
  },
  {
    title: '等级描述',
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
