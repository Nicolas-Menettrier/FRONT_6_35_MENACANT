import React from "react";
import { Form, Icon, Input, Button } from "antd";

const ForgotPassword: React.FC = ({ form }: any) => {
  const { getFieldDecorator } = form;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="form-register">
      <Form.Item>
        {getFieldDecorator("Email", {
          rules: [
            {
              required: true,
              type: "email",
              message: "Please input a valid email"
            }
          ]
        })(<Input prefix={<Icon type="user" />} placeholder="Valid email" />)}
      </Form.Item>

      <Button type="primary" htmlType="submit" className="login-form-button">
        Send
      </Button>
    </Form>
  );
};

export default Form.create({ name: "forgot_password" })(ForgotPassword);
