import { gql } from "apollo-boost";

export const GET_USER_INFO = gql`
  query {
    user {
      id
      username
      email
      posts {
        message
        id
        likes {
          count
        }
        user {
          username
        }
        comments {
          id
        }
      }
      description
    }
  }
`;

export const GET_POST = gql`
  query Post($id: Int!) {
    post(id: $id) {
      message
      id
      likes {
        count
      }
      user {
        username
      }
      comments {
        message
        id
        user {
          username
        }
        post {
          id
        }
      }
    }
  }
`;

export const GET_HOME_POST = gql`
  query {
    follows {
      posts {
        message
        id
        likes {
          count
        }
        user {
          username
        }
        comments {
          id
        }
      }
    }
    user {
      posts {
        message
        id
        likes {
          count
        }
        comments {
          id
        }
        user {
          username
        }
      }
    }
  }
`;

export const ADD_COMMENTS = gql`
  mutation Comment($postId: Int!, $message: String!) {
    comment(postId: $postId, message: $message) {
      id
      user {
        username
      }
      message
    }
  }
`;

export const ADD_POST = gql`
  mutation Post($message: String!) {
    post(message: $message) {
      id
    }
  }
`;

export const ADD_LIKES = gql`
  mutation Like($postId: Int!) {
    like(postId: $postId) {
      id
    }
  }
`;
