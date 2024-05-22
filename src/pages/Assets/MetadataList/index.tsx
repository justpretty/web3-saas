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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
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
            <Button type="primary">创建NFT集合目录</Button>
            <Button type="primary">上传NFT图片</Button>
          </Space>
          <Breadcrumb separator="">
            <Breadcrumb.Item>文件位置</Breadcrumb.Item>
            <Breadcrumb.Separator>:</Breadcrumb.Separator>
            <Breadcrumb.Item onClick={clickDir}>根目录</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
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
