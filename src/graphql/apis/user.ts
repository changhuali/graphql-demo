import { gql } from '@apollo/client'

/**
 * 获取用户列表
 */
export const getUserList = gql`
  query {
    users {
      id
    }
  }
`