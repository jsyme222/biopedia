import { gql } from "@apollo/client";

export const ENTRIES_BY_USERNAME = (username: string) => gql`
query {
  entriesByUsername(username: "${username}") {
    title
    category {
      title
    }
    dateRecordedOn
    dateOfEvents
    contentImages {
      title
      document
    }
    contentAudio {
      title
      document
    }
    contentVideo {
      title
      document
    }
    contentDocuments {
      title
      document
    }
  }
}
`