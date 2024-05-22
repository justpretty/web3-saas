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
    title: '活动名称',
    dataIndex: 'nane',
    hideInTable: true,
  },
  {
    title: '活动地点',
    dataIndex: 'activityAddress',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '活动ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '活动名称',
    width: 160,
    dataIndex: 'nane',
    hideInSearch: true,
  },
  {
    title: '活动状态',
    width: 160,
    dataIndex: 'status',
    hideInSearch: true,
  },
  {
    title: '活动开始时间',
    width: 160,
    dataIndex: 'startTime',
    hideInSearch: true,
  },
  {
    title: '活动结束时间',
    width: 160,
    dataIndex: 'endTime',
    hideInSearch: true,
  },
  {
    title: '活动描述',
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
