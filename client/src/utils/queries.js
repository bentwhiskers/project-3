import {gql} from "@apollo/client"

export const QUERY_EVENT = gql`
{
  getEvent {
    _id
    title
    description
    date
    time
  }
}
`
export const QUERY_CLASSIFIEDS = gql `
{
  getClassifieds {
    _id 
    title
    description
  }
}
`