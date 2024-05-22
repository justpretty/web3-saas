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
    title: '商品分类',
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
    title: '商品名称',
    dataIndex: 'goodsName',
    hideInTable: true,
    fieldProps: {
      maxLength: 12,
    },
  },

  // table里面的内容
  {
    title: '商品ID',
    width: 190,
    dataIndex: 'serialNo',
    hideInSearch: true,
  },
  {
    title: '商户ID',
    width: 190,
    dataIndex: 'merchantNo',
    hideInSearch: true,
  },
  {
    title: '店铺ID',
    width: 190,
    dataIndex: 'storeNo',
    hideInSearch: true,
  },
  {
    title: '商品名称',
    width: 160,
    dataIndex: 'goodsName',
    hideInSearch: true,
  },
  {
    title: '商品分类',
    width: 160,
    dataIndex: 'goodsCategoryNo',
    hideInSearch: true,
  },
  {
    title: '状态',
    width: 100,
    disable: true,
    dataIndex: 'type',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      0: {
        text: 'ERC20',
        status: 'Error',
      },
      1: {
        text: 'ERC721',
        status: 'Success',
        disabled: true,
      },
      2: {
        text: 'REC1155',
        status: 'Processing',
      },
    },
  },
  {
    title: '商品价格(最低)',
    width: 160,
    dataIndex: 'goodsPriceMin',
    hideInSearch: true,
  },
  {
    title: '商品价格(最高)',
    width: 160,
    dataIndex: 'goodsPriceMax',
    hideInSearch: true,
  },
  {
    title: '库存总量',
    width: 160,
    dataIndex: 'stockTotal',
    hideInSearch: true,
  },
  {
    title: '销量',
    width: 160,
    dataIndex: 'salesVolume',
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
