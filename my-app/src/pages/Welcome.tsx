// import React from 'react';
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Form, Row, Col, Input, Button,Select } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
// import styles from './Welcome.less';
// import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

const Welcome = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 13 : 6;
    const children = [];
    const aa=["楼宇编码","楼宇名称","省分楼宇编码","落地客户联系人/联系电话","标准地址ID","一站式业务流水号","一站式业务信息ID","电路代号","是否IDC外拉","是否开通80端口","使用类型","合同期限（月）","发起方客户经理联系电话"];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            // label={`Field ${i}`}
            label={aa[i]}
            rules={[
              {
                required:(i!=8&&i!=9&&i!=10&&i!=11)? false:true
                // message: 'Input something!',
              },
            ]}
          >
            {(i != 8&&i!=9&&i!=10)? (
              <Input placeholder="请输入" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">是</Option>
                <Option value="2">否</Option>
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
    <PageContainer>
      <Card bordered={false}>
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          
          <Row gutter={24} >
            <Col span={8}>
              <Form.Item name="gender" label="业务模式" rules={[{ required: true }]}>
                <Select
                  placeholder="请选择"
                  // onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">国内业务</Option>
                  <Option value="female">国外业务</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item  name="gender" label="业务子类型" rules={[{ required: true }]}>
              <Select
                placeholder="请选择"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="male">国内业务</Option>
                <Option value="female">国外业务</Option>
              </Select>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item name="gender" label="端口宽带" rules={[{ required: true }]}>
              <Select
                placeholder="请选择"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="male">国内业务</Option>
                <Option value="female">国外业务</Option>
              </Select>
            </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>{getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
              <a
                style={{ fontSize: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? <UpOutlined /> : <DownOutlined />} Collapse
              </a>
            </Col>
          </Row>
        </Form>
      </Card>
    </PageContainer>
  );
};

// ReactDOM.render(<Demo />, mountNode);

export default Welcome;
