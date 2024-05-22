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
    title: '任务名称',
    dataIndex: 'taskName',
    hideInTable: true,
  },
  {
    title: '任务状态',
    dataIndex: 'status',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '任务ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '任务名称',
    width: 160,
    dataIndex: 'taskName',
    hideInSearch: true,
  },
  {
    title: '任务状态',
    width: 160,
    dataIndex: 'status',
    hideInSearch: true,
  },
  {
    title: '任务状态',
    width: 160,
    dataIndex: 'status',
    hideInSearch: true,
  },
  {
    title: '激励币种',
    width: 160,
    dataIndex: 'ccy',
    hideInSearch: true,
  },
  {
    title: '质押金额',
    width: 160,
    dataIndex: 'stakeAmount',
    hideInSearch: true,
  },
  {
    title: '激励金额',
    width: 160,
    dataIndex: 'incentiveAmount',
    hideInSearch: true,
  },
  {
    title: '开始时间',
    width: 160,
    dataIndex: 'startTime',
    hideInSearch: true,
  },
  {
    title: '结束时间',
    width: 160,
    dataIndex: 'endTime',
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
