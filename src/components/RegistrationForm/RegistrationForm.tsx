/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Form, Input, Tooltip, Icon, Button } from "antd";

import { RegistrationProps } from "../../types/types.6_35";

const RegistrationForm: React.FC<RegistrationProps> = ({
  form
}: RegistrationProps) => {
  const { getFieldDecorator } = form;
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
        axios({
          url: `${process.env.REACT_APP_API_URL}api/registration`,
          data: {
            email: values.email,
            password: values.password,
            username: values.nickname
          },
          method: "post"
        })
          .then(res => {
            localStorage.setItem("token", res.data.token);
            history.push("/profile");
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    });
  };

  const compareToFirstPassword = (
    rule: any,
    value: any,
    callback: any
  ): void => {
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (
    rule: any,
    value: any,
    callback: any
  ): void => {
    if (value) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  return (
    <Form onSubmit={handleSubmit} className="form-register">
      <Form.Item label="E-mail">
        {getFieldDecorator("email", {
          rules: [
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Password" hasFeedback>
        {getFieldDecorator("password", {
          rules: [
            {
              required: true,
              message: "Please input your password!"
            },
            {
              validator: validateToNextPassword
            }
          ]
        })(<Input.Password />)}
      </Form.Item>
      <Form.Item label="Confirm Password" hasFeedback>
        {getFieldDecorator("confirm", {
          rules: [
            {
              required: true,
              message: "Please confirm your password!"
            },
            {
              validator: compareToFirstPassword
            }
          ]
        })(<Input.Password />)}
      </Form.Item>
      <Form.Item
        label={(
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        )}
      >
        {getFieldDecorator("nickname", {
          rules: [
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "register" })(RegistrationForm);
