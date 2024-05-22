import { Tabs, Card } from 'antd';
import React from 'react';

type ExcRateChangeList = {
  date: string;
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

  React.useEffect(() => {
    getDate(7)
  }, [])

  // 获取报表数据
  const getDate = async (amount: number) => {
    let res = {
      body: {
        excRateChangeList: [
          {
            date: "2017-12-12",
            excRate: 1,
          },
          {
            date: "2017-12-13",
            excRate: 2,
          },
          {
            date: "2017-12-14",
            excRate: 3,
          }
        ],
        ccyPair: "",
        curExcRate: 1
      }
    }

    let excRateChangeList = res.body.excRateChangeList.map((item: ExcRateChangeList) => {
      return {
        date: item.date,
        excRate: Number(item.excRate)
      }
    })
    let data = { ...res.body, excRateChangeList }
    setAllData(data)
  }

  return (
    <div>
      <Card>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="分销设置" key="1">
            分销设置
          </Tabs.TabPane>
          <Tabs.TabPane tab="团队" key="2">
            团队
          </Tabs.TabPane>
          <Tabs.TabPane tab="业绩" key="3">
            业绩
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
};
