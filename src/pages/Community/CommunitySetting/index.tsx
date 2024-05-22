import { Tabs, Card, Button, Popconfirm } from 'antd';
import React from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import LindeChart from './lindeChart';

import TableTitle from '../../../components/TableTitle';

import columnsData, { columnsDataType } from './data';

import { getBondingCurveTokenJournalPageList,getBondingCurveTokenJournalList } from './service';

type ExcRateChangeList = {
  supply: number | string;
  excRate: number | string;
};

type AllData = {
  ccyPair: string;
  curExcRate: number;
  excRateChangeList: ExcRateChangeList[];
};

export default () => {
  // 表头数据
  const [allData, setAllData] = React.useState<AllData>();

  /**
   * 监听页面路径设置布局
   */
  React.useEffect(() => {
    // getDate(7)
    getBondingCurveTokenJournal();
  }, []);

  const getBondingCurveTokenJournal = async () => {
    const reqParams = {
      merchantNo: '',
      pageSize: '100',
      current: '1',
      limit: '1000',
    };
    const res = await getBondingCurveTokenJournalList(reqParams);
    console.log(res);
    let excRateChangeList = res.data?.map((item: ExcRateChangeList) => {
      return {
        supply: item.supply,
        excRate: Number(item.price),
      };
    });
    let data = { ...res.data, excRateChangeList };
    setAllData(data);
  };

  // 表头数据
  const columns: ProColumns<columnsDataType>[] = columnsData;

  // 操作行数据 自定义操作行
  const actionRender: any = (text: any, record: any, index: number) => (
    <ul className="ant-list-item-action" style={{ margin: 0 }}>
      <li>
        <a
          onClick={() => {
            // 调用方法
          }}
        >
          查看
        </a>
        <em className="ant-list-item-action-split"></em>
      </li>
      <li>
        <Popconfirm
          title="确定删除此条模板？"
          okText="是"
          cancelText="否"
          onConfirm={() => {
            // 调用方法
          }}
          // onCancel={cancel}
        >
          <a>删除</a>
        </Popconfirm>
      </li>
    </ul>
  );

  // 自定义数据的表格头部数据
  columns.forEach((item: any) => {
    item.dataIndex === 'action' ? (item.render = actionRender) : undefined;
  });

  // Table action 的引用，便于自定义触发
  const actionRef = React.useRef<ActionType>();

  // 获取报表数据
  const getDate = async (amount: number) => {
    let res = {
      body: {
        excRateChangeList: [
          {
            supply: 7472785520000000000000,
            excRate: 0.1336922435,
          },
          {
            supply: 167522907060000000000000,
            excRate: 0.138059241,
          },
          {
            supply: 325581590830000000000000,
            excRate: 0.1429301828,
          },
          {
            supply: 481672335450000000000000,
            excRate: 0.1483468416,
          },
          {
            supply: 635821714090000000000000,
            excRate: 0.1543682634,
          },
          {
            supply: 788059644590000000000000,
            excRate: 0.1610512487,
          },
          {
            supply: 938418917840000000000000,
            excRate: 0.1684565665,
          },
          {
            supply: 1486935206350000000000000,
            excRate: 0.2039348265,
          },
          {
            supply: 2028892000640000000000000,
            excRate: 0.2569915906,
          },
          {
            supply: 2564746571040000000000000,
            excRate: 0.3359547999,
          },
          {
            supply: 3095075715900000000000000,
            excRate: 0.453027127,
          },
          {
            supply: 3620521275890000000000000,
            excRate: 0.6259082209,
          },
          {
            supply: 4141735312230000000000000,
            excRate: 0.8803038931,
          },
          {
            supply: 4659337743340000000000000,
            excRate: 1.2532208731,
          },
        ],
        ccyPair: '',
        curExcRate: 1,
      },
    };

    let excRateChangeList = res.body.excRateChangeList.map(
      (item: ExcRateChangeList) => {
        return {
          supply: item.supply,
          excRate: Number(item.excRate),
        };
      },
    );
    let data = { ...res.body, excRateChangeList };
    setAllData(data);
  };

  return (
    <div>
      <Card>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="社区账本设置" key="1">
            社区账本设置
          </Tabs.TabPane>
          <Tabs.TabPane tab="积分铸造曲线" key="2">
            <LindeChart data={allData ? allData.excRateChangeList : []} />
            {/* Pro表格 */}
            <div style={{ marginTop: '20px' }}>
              <ProTable<columnsDataType>
                headerTitle={<TableTitle title="铸造列表" />}
                scroll={{ x: 900 }}
                bordered
                // 表头
                columns={columns}
                actionRef={actionRef}
                // 请求获取的数据
                request={async (params) => {
                  // console.log(params);
                  let res = await getBondingCurveTokenJournalPageList({
                    ...params,
                    // pageNum: params.current,
                  });
                  console.log('😒', res);
                  const result = {
                    data: res.data,
                    total: res.pagination.totalSize,
                  };
                  return result;
                }}
                rowKey="serialNo"
                // 搜索框配置
                search={{
                  labelWidth: 'auto',
                }}
                // 搜索表单的配置
                form={{
                  ignoreRules: false,
                }}
                pagination={{
                  pageSize: 10,
                }}
              />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="提案设置" key="3">
            提案设置
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
};
