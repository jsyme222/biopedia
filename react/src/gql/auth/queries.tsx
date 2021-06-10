import { gql } from "@apollo/client";

export const LOGIN = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return gql`
    mutation {
        tokenAuth(username: "${username}", password: "${password}") {
          token
        }
      }
      `;
};
