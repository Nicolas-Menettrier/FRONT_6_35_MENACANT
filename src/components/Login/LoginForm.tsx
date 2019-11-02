/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import { FormProps } from "../../types/types.6_35";

const NormalLoginForm: React.FC<FormProps> = ({ form, history }: FormProps) => {
  const { getFieldDecorator } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    form.validateFields((err: Error, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item hasFeedback>
        {getFieldDecorator("email", {
          rules: [
            {
              required: true,
              message: "Please input your email!"
            },
            {
              type: "email",
              message: "Please insert a valid email"
            }
          ]
        })(<Input prefix={<Icon type="user" />} placeholder="Email" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input.Password
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <a
          className="login-form-forgot"
          onClick={(): void => history.push("/forgotPassword")}
        >
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a onClick={(): void => history.push("/register")}>register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "normal_login" })(NormalLoginForm);
