import Header from "../components/header";
import Footer from "../components/footer";
import EventPost from "./eventPost"
export default function Events() {
  return (
   <div>
    <Header/>

    <h2>Events Page</h2>
    
    <div className = "Events">
    <p>Be inspired by new people and places with local Events! <a href = "/eventsPost">Post</a> to Host a new event! <a href = "/search">Search</a> for something to match your vibe!</p>
    </div>
    <EventPost/>
    <Footer/>
   </div>
  );
}

//Need to have post and search routes set up and added to these anchor tags

//event model and schema to match input taken in from front end submit form