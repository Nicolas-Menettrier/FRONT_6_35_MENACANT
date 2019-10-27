import { ReactType } from "react";
import { RouteComponentProps } from "react-router";

export interface PrivateRouteProps {
  component: ReactType;
  isAuthenticated: Boolean;
  isLoading: Boolean;
  path: string;
}

type Children = {
  token: string;
  loginStart: any;
  error: string;
  isLogging: boolean;
  history: History;
};

export interface FormProps extends RouteComponentProps {
  form: any;
  getFieldDecorator: any;
  children: Children;
}

export interface RegistrationProps extends RouteComponentProps {
  form: any;
}

export interface PostProps {
  likes: number;
  comments: number;
  contents: string;
  author: string;
  date: any;
}
