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
    title: '文章分类',
    dataIndex: 'type',
    valueType: 'select',
    hideInTable: true,
    valueEnum: {
      0: {
        text: 'ERC20',
      },
      1: {
        text: 'ERC721',
      },
      2: {
        text: 'REC1155',
      },
    },
  },
  {
    title: '文章标题',
    dataIndex: 'title',
    hideInTable: true,
    fieldProps: {
      maxLength: 20,
    },
  },

  // table里面的内容
  {
    title: '文章ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '文章标题',
    width: 160,
    dataIndex: 'title',
    hideInSearch: true,
  },
  {
    title: '精选标识',
    width: 160,
    dataIndex: 'selected',
    hideInSearch: true,
  },
  {
    title: '点赞数',
    width: 160,
    dataIndex: 'likesCount',
    hideInSearch: true,
  },
  {
    title: '收藏数',
    width: 160,
    dataIndex: 'collectCount',
    hideInSearch: true,
  },
  {
    title: '分享数',
    width: 160,
    dataIndex: 'shareCount',
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
