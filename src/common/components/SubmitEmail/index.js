import React from 'react';
import { Form, Input, Button, Radio } from 'antd';

class SubmitEmailForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.props.onSubmit(values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input type="email" />)}
        </Form.Item>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your name!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please input your phone number!' },
            ],
          })(<Input style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="What course are you interested in?">
          {getFieldDecorator('level')(
            <Radio.Group>
              <Radio value="N5">Nihongo N5 Level I</Radio>
              <Radio value="N4">Nihongo N4 Level II</Radio>
              <Radio value="BusinessNihongo1">Business Nihongo Level I</Radio>
              <Radio value="BusinessNihongo2">Business Nihongo Level II</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="Message">
          {getFieldDecorator('message', {
            rules: [
              {
                required: true,
                message: 'Please input your message!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            disabled={this.props.isSubmitted}
            className="primary-btn"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSubmitEmailForm = Form.create({ name: 'submitEmail' })(
  SubmitEmailForm,
);

export default WrappedSubmitEmailForm;
