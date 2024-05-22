import React, { useState } from 'react';
import {
  Form,
  Input,
  Modal,
  Button,
  Select,
  Popconfirm,
  Descriptions,
  Radio, Space, Tabs,
  Card,
  RadioChangeEvent, Table, Tag,
  Col, Row
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import columnsData, { columnsDataType } from './data';
import {
  getUniflyOrderPageList,
  addUniflyOrder,
  deleteUniflyOrder,
  getUniflyOrderDetail,
} from './service';
import TableTitle from '../../components/TableTitle';

type TabPosition = 'top' | 'right' | 'left' | 'bottom';
const { Option } = Select;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

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
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 6 : 3;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`商品编号-${i}`}
            label={`商品编号 ${i}`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">
                  longlonglong
                </Option>
              </Select>
            )}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            清空
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} 展开
          </a>
        </Col>
      </Row>
    </Form>
  );
};

export default () => {
  const { TextArea } = Input;
  const { Option } = Select;
  // 控制新增模态框
  const [isTemplateModal, setIsTemplateModal] = useState(false);
  // 查看模态框
  const [isViewTemplateModal, setIsViewTemplateModal] = useState(false);
  // 查看
  const [isViewRecord, setIsViewRecord] = useState({});
  // 获取表单
  const [FormRef] = Form.useForm();

  const [tabPosition, setTabPosition] = useState<TabPosition>('all');
  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  /**
   * 以下内容为表格相关
   */

  // 表头数据
  const columns: ProColumns<columnsDataType>[] = columnsData;

  // 操作行数据 自定义操作行
  const actionRender: any = (text: any, record: any, index: number) => (
    <ul className="ant-list-item-action" style={{ margin: 0 }}>
      <li>
        <a
          onClick={() => {
            toViewContractTemplate(record);
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
            toDelContractTemplate(record);
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

  /**
   * 以下内容为操作相关
   */

  // 新增模板
  const increaseTemplate = () => {
    setIsTemplateModal(true);
  };

  /**
   * 确认添加模板
   */
  const confirmTemplate = () => {
    // 获取输入的表单值
    FormRef.validateFields()
      .then(async () => {
        // 获取表单结果
        let response = FormRef.getFieldsValue();
        console.log(response);
        addUniflyOrder(response).then((res) => {
          console.log('add', res);
        });
        // 重置输入的表单
        FormRef.resetFields();
        // 刷新proTable
        actionRef.current?.reload();
        setIsTemplateModal(false);
      })
      .catch(() => { });
  };

  /**
   * 取消添加模板
   */
  const onCancelTemplate = () => {
    // 重置输入的表单
    FormRef.resetFields();
    setIsTemplateModal(false);
  };

  /**
   * 删除模板
   */
  const toDelContractTemplate = async (record) => {
    console.log('record', record);
    let { serialNo } = record;
    let delRes = await deleteUniflyOrder({ serialNo });
    console.log('delRes', delRes);
    if (delRes.code === '000000') {
      // 删除成功刷新表单
      actionRef.current?.reload();
    }
  };

  /**
   * 查看详情
   */
  const toViewContractTemplate = async (record) => {
    let { serialNo } = record;
    let viewRes = await getUniflyOrderDetail({ serialNo });
    setIsViewTemplateModal(true);
    console.log('viewRes', viewRes);
    setIsViewRecord(viewRes.data);
  };

  /**
   * 详情，模板类型对应
   */
  const handleViewRecordOfType = () => {
    let { type } = isViewRecord;
    let typeText = type;
    return typeText;
  };

  return (
    <div>
      <Card>
        <AdvancedSearchForm />
        <Space style={{ marginBottom: 24 }}>
          <Radio.Group value={tabPosition} onChange={changeTabPosition}>
            <Radio.Button value="all">全部订单</Radio.Button>
            <Radio.Button value="bottom">待付款</Radio.Button>
            <Radio.Button value="left">已支付</Radio.Button>
            <Radio.Button value="right">待发货</Radio.Button>
            <Radio.Button value="1">待发货</Radio.Button>
            <Radio.Button value="2">已发货</Radio.Button>
            <Radio.Button value="3">已完成</Radio.Button>
            <Radio.Button value="4">已取消</Radio.Button>
          </Radio.Group>
        </Space>
        {/* 表格 */}
        <Table columns={columns} dataSource={data} />
      </Card>
      {/* 新增合约模板模态框 */}
      <Modal
        title="添加合约协议"
        centered
        visible={isTemplateModal}
        onOk={confirmTemplate}
        onCancel={onCancelTemplate}
      >
        <Form
          name="basic"
          form={FormRef}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 14 }}
          // 表单默认值
          initialValues={{ type: 'ERC20' }}
        >
          <Form.Item
            label="协议类型"
            name="type"
            rules={[{ required: true, message: '请选择协议类型!' }]}
          >
            <Select style={{ width: '100%' }}>
              <Option value="ERC20">ERC20</Option>
              <Option value="ERC721">ERC721</Option>
              <Option value="REC1155">REC1155</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="协议名称"
            name="protocolName"
            rules={[{ required: true, message: '请输入协议名称!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="协议编号"
            name="protocolCode"
            rules={[{ required: true, message: '请输入协议编号!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="协议bytecode"
            name="protocolBytecode"
            rules={[{ required: true, message: '请输入协议bytecode!' }]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            label="协议abi字符"
            name="protocolAbi"
            rules={[{ required: true, message: '请输入协议abi字符!' }]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            label="协议描述"
            name="description"
            rules={[{ required: true, message: '请输入协议描述!' }]}
          >
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
      {/* 查看详情模态框 */}
      <Modal
        title="查看合约协议"
        width={800}
        centered
        visible={isViewTemplateModal}
        onOk={() => setIsViewTemplateModal(false)}
        onCancel={() => setIsViewTemplateModal(false)}
      >
        {/* 详情信息 */}
        <Descriptions title="合约协议信息">
          <Descriptions.Item label="租户ID">
            {isViewRecord?.tenantId}
          </Descriptions.Item>
          <Descriptions.Item label="协议编号">
            {isViewRecord?.serialNo}
          </Descriptions.Item>
          <Descriptions.Item label="合约协议类型">
            {handleViewRecordOfType()}
          </Descriptions.Item>
          <Descriptions.Item label="协议名称">
            {isViewRecord?.templateName}
          </Descriptions.Item>
          <Descriptions.Item label="合约协议bytecode">
            {isViewRecord?.templateBytecode}
          </Descriptions.Item>
          <Descriptions.Item label="合约协议abi字符">
            {isViewRecord?.templateAbi}
          </Descriptions.Item>
          <Descriptions.Item label="创建者">
            {isViewRecord?.createBy}
          </Descriptions.Item>
          <Descriptions.Item label="创建时间">
            {isViewRecord?.createTime}
          </Descriptions.Item>
          <Descriptions.Item label="协议描述">
            {isViewRecord?.description}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </div>
  );
};
