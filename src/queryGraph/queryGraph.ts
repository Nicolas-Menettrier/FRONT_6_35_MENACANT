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
        date
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
      date
      id
      likes {
        count
      }
      user {
        username
      }
      comments {
        date
        message
        id
        user {
          username
        }
        post {
          id
        }
        comments {
          id
        }
        likes {
          count
        }
      }
    }
  }
`;

export const GET_HOME_POST = gql`
  query {
    follows {
      id
      posts {
        message
        id
        date
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
      id
      posts {
        message
        id
        date
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
      message
      date
      id
      user {
        username
      }
      post {
        id
      }
      likes {
        count
      }
      comments {
        id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation Post($message: String!) {
    post(message: $message) {
      id
      message
      date
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
`;

export const ADD_LIKES = gql`
  mutation Like($postId: Int!) {
    like(postId: $postId) {
      id
    }
  }
`;

export const RETWEET = gql`
  mutation Repost($postId: Int!) {
    repost(postId: $postId) {
      id
    }
  }
`;
