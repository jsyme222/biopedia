import { gql } from "@apollo/client";

export const DOCUMENTS_BY_USERNAME = (username: string) => gql`
  {
    allDocumentsByUsername(username: "${username}") {
      ... on BioDocumentType {
        document
        title
      }
      ... on BioDocumentAudioType {
        document
        title
      }
      ... on BioDocumentImageType {
        document
        title
      }
      ... on BioDocumentVideoType {
        document
        title
      }
    }
  }
`;
