import React, { useState } from 'react';
import {
  Form,
  Input,
  Modal,
  message,
  Button,
  Select,
  Card,
  Popconfirm,
  Descriptions,
} from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import columnsData, { columnsDataType } from './data';
import {
  getContractProtocolPageList,
  addContractProtocol,
  deleteContractProtocol,
  getContractProtocolDetail,
} from './service';
import styles from './index.css';

export default ({ setIsLoadIssueAssets }) => {
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
        addContractProtocol(response).then((res) => {
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
    let delRes = await deleteContractProtocol({ serialNo });
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
    let viewRes = await getContractProtocolDetail({ serialNo });
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
    <>
      <Card style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => {
            setIsLoadIssueAssets(false);
          }}
          className={styles.btn}
        >
          返回
        </Button>
        <Descriptions title="发行数字资产">
        </Descriptions>
        <div className={styles.addForm}>
          <Form
            name="basic"
            form={FormRef}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 7 }}
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
        </div>
      </Card>
    </>
  );
};
