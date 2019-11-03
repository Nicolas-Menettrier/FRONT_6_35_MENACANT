/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import axios from "axios";

import { FormProps } from "../../types/types.6_35";

const NormalLoginForm: React.FC<FormProps> = ({ form, history }: FormProps) => {
  const [state, setState] = useState({ loading: false, error: false });
  const { getFieldDecorator } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    setState(prev => ({ ...prev, loading: true }));
    e.preventDefault();
    form.validateFields((err: Error, values: any) => {
      if (!err) {
        axios({
          url: `${process.env.REACT_APP_API_URL}api/authentication`,
          data: {
            email: values.email,
            password: values.password
          },
          method: "post"
        })
          .then(res => {
            localStorage.setItem("token", res.data.token);
            history.push("/profile");
          })
          .catch(() => {
            setState(prev => ({ ...prev, error: true }));
          })
          .finally(() => setState(prev => ({ ...prev, loading: false })));
      }
      setState({ loading: false, error: false });
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
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={state.loading}
        >
          {state.error ? "Wrong credentials" : "Log in"}
        </Button>
        Or <a onClick={(): void => history.push("/register")}>register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "normal_login" })(NormalLoginForm);
