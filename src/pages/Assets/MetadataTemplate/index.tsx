import React, { useState } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {
  PlusOutlined,
  LoadingOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import columnsData, { columnsDataType } from './data';
// ipfs
import { getMetadataTemplateList, addMetadataTemplate, deleteMetadataTemplate } from './service';
import TableTitle from '@/components/TableTitle';
import {
  Input,
  Modal,
  message,
  Form,
  Button,
  Upload,
  InputNumber,
  Popconfirm,
  Select,
} from 'antd';
import type { UploadProps } from 'antd';

const { TextArea } = Input;
// 上传组件
const { Dragger } = Upload;
const { Option } = Select;

export default () => {
  let ipfsApiUrl = process.env.ipfsApiUrl;
  let ipfsGatewayUrl = process.env.ipfsGatewayUrl;

  let metaDatajsonTemp = {
    name: 's11e-DAO',
    description: 's11e-DAO 出品',
    external_url: '1',
    image: '身份形象的URI',
  };
  // 控制新增模态框
  const [isIncreaseModal, setIsIncreaseModal] = useState(false);
  // 表头数据
  const columns: ProColumns<columnsDataType>[] = columnsData;
  // 是否为碎片
  const [isFragments, setIsFragments] = useState(0);
  // 图片的path
  const [metaDataImagePath, setMetaDataImagePath] = useState<string | null>('');
  // 控制textarea字段更新
  const [metaDatajson, setMetaDatajson] = useState(metaDatajsonTemp);
  // ipfs地址

  // 操作行数据 自定义操作行
  const actionRender: any = (text: any, record: any, index: number) => (
    <Popconfirm
      title="确认删除本条元数据?"
      onConfirm={async () => {
        let res = await deleteMetadataTemplate({ serialNo: record.serialNo });
        console.log(res);
        if (res.code === '000000') message.success('删除成功');
        actionRef.current?.reload();
      }}
      // onCancel={delCancel}
      okText="确认"
      cancelText="取消"
    >
      <a key={record.acNo}>删除</a>
    </Popconfirm>
  );

  // 赋值表格操作行
  columns.forEach((item: any) => {
    item.dataIndex === 'action' ? (item.render = actionRender) : undefined;
  });
  // 上传图片
  const uploadProps: UploadProps = {
    name: 'file',
    // 只能上传一个
    maxCount: 1,
    onChange(info) {
      // 控制path是否显示
      console.log(info);
      // 是加载
      if (info.fileList.length) {
        let { file } = info;
        console.log(file);
      }
    },
    beforeUpload() {
      return false;
    },
    // 拖拽
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    onRemove(e) {
      setMetaDataImagePath('');
    },
  };

  /**
   * 点击新增按钮
   */
  const increase = () => {
    setIsIncreaseModal(true);
  };

  /**
   * 新增模态框确定按钮
   */
  const confirmIncrease = async () => {
    let formInfo = await addFormRef.validateFields();
    if (!metaDataImagePath) return message.info('请上传图片');
    let data = JSON.stringify(metaDatajson);
    let res = await addMetadataTemplate({
      ...formInfo,
      metadataImage: ipfsGatewayUrl + metaDataImagePath,
    });
    console.log(res);
    if (res.code === '000000') {
      message.success('添加元数据成功');
      addFormRef.resetFields();
      setMetaDataImagePath(null);
      actionRef.current?.reload();
      setIsIncreaseModal(false);
    }
  };

  /**
   * 新增模态框取消按钮
   */
  const onCancelIncrease = () => {
    addFormRef.resetFields();
    setMetaDataImagePath(null);
    setIsIncreaseModal(false);
  };

  // 表格的引用，便于自定义触发
  const actionRef = React.useRef<ActionType>();
  // 添加用户数据表单验证 获取表单
  const [addFormRef] = Form.useForm();
  return (
    <div>
      {/* Pro表格 */}
      <ProTable<columnsDataType>
        headerTitle={<TableTitle title="NFT元数据" />}
        scroll={{ x: 900 }}
        bordered
        // 表头
        columns={columns}
        actionRef={actionRef}
        // 请求获取的数据
        request={async (params) => {
          console.log(params);

          let res = await getMetadataTemplateList({ ...params });
          console.log(res);
          console.log('🎉');
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
        toolBarRender={() => [
          <Button
            onClick={() => {
              increase();
            }}
            key="button"
            icon={<PlusOutlined />}
            type="primary"
          >
            新增
          </Button>,
        ]}
      />
      {/* 新增模态框 */}
      <Modal
        centered
        visible={isIncreaseModal}
        onOk={confirmIncrease}
        onCancel={onCancelIncrease}
        width={650}
        title="头像元数据"
      >
        <Form
          name="basic"
          form={addFormRef}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="主题名称"
            name="metadataName"
            rules={[{ required: true, message: '请填写名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="主题性别"
            name="sex"
            rules={[{ required: true, message: '选择主题性别' }]}
          >
            <Select style={{ width: 120 }}>
              <Option value={0}>男</Option>
              <Option value={1}>女</Option>
              <Option value={2}>无</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="是否是碎片"
            name="fragmentsFlag"
            rules={[{ required: true, message: '请选择' }]}
          >
            <Select
              onChange={(e) => {
                setIsFragments(e);
              }}
              style={{ width: 120 }}
            >
              <Option value={0}>否</Option>
              <Option value={1}>是</Option>
            </Select>
          </Form.Item>
          {isFragments == 0 ? null : (
            <Form.Item
              label="碎片编号"
              name="fragmentsSerialNo"
              rules={[{ required: true, message: '请填写碎片编号' }]}
            >
              <InputNumber max={9} min={1} />
            </Form.Item>
          )}
          <Form.Item label="上传图片" name="metadataUrl">
            <Dragger {...uploadProps} listType="picture">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">点击上传</p>
            </Dragger>
            {metaDataImagePath ? ipfsGatewayUrl + metaDataImagePath : null}
          </Form.Item>
          <TextArea
            autoSize={{ minRows: 9, maxRows: 9 }}
            value={JSON.stringify(metaDatajson, null, 2)}
            style={{ marginTop: 20 }}
          />
        </Form>
      </Modal>
    </div>
  );
};
