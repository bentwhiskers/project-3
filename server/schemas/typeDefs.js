const gql = require("apollo-server-express")

const typeDefs = gql`

type Event {
  title: String
  description: String,
  date: Date
  time: String

}

type Classifieds {
  title: String
  description: String,
  date: Date
  time: String

}

input EventInput {
  title: String
  description: String,
  date: Date
  time: String
}

input ClassifiedsInput {
  title: String
  description: String,
  date: Date
  time: String
}

type Query{
  getEvent: [Event]
  getClassifieds: [Classifieds]
}


type Mutation{
  addEvent(eventData: EventInput):Event
  addClassifieds(classifiedData: ClassifiedsInput): Classifieds

}


`