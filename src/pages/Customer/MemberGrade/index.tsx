import React, { useState } from 'react';
import { Breadcrumb, Card, Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export default () => {
  const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
  ];

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '等级ID',
      width: 190,
      dataIndex: 'serialNo',
    },
    {
      title: '等级名称',
      width: 160,
      dataIndex: 'name',
    },
    {
      title: '等级级数',
      width: 160,
      dataIndex: 'gradeNum',
    },
    {
      title: '等级编号',
      width: 160,
      dataIndex: 'gradeCode',
    },
    {
      title: '等级图标',
      width: 160,
      dataIndex: 'gradeImage',
    },
    {
      title: '等级描述',
      width: 160,
      dataIndex: 'description',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const clickDir = () => {
    console.log('点击了目录');
  };

  return (
    <div>
      <Card>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Space size={[8, 16]} wrap>
            <Button type="primary">添加等级</Button>
          </Space>
          <Table
            onRow={(record) => {
              return {
                onClick: (event) => {
                  console.log(event);
                }, // 点击行
              };
            }}
            columns={columns}
            dataSource={data}
          />
        </Space>
      </Card>
    </div>
  );
};
