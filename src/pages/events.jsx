import Header from "../components/header";

export default function Events() {
  return (
   <div>
    <Header/>
    
    <h2>Events Page</h2>
    
    <div className = "Events">
    <p>Be inspired by new people and places with local Events! <a href = "/eventsPost">Post</a> to Host a new event! <a href = "">Search</a> for something to match your vibe!</p>
    </div>
   </div>
  );
}

//Need to have post and search routes set up and added to these anchor tags