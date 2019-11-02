/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactType } from "react";
import { RouteComponentProps } from "react-router";

export interface PrivateRouteProps {
  component: ReactType;
  isAuthenticated: boolean;
  isLoading: boolean;
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
  likes?: number;
  comments?: number;
  contents: string;
  author: string;
  date: any;
  id: string;
  comment?: boolean;
  width?: boolean;
}

export interface ZoomViewProps {
  likes: number;
  comments: number;
  contents: string;
  author: string;
  date: any;
  id: string;
}

export interface AddCommentModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

export interface HeaderProps {
  text: string;
}

export interface SiderPanProps {
  icon: string;
  text: string;
  active: string;
}

export type SiderStates = "Home" | "Notifications" | "Profile";
