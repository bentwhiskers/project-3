import Header from "../components/header";
import Footer from "../components/footer";
import Hashtags from "../components/hashtags";
import Navbar from "../components/navbar";
function Home() {
  return (
    
   <div>
    <Navbar />
    <Header/>
    <h1>Community Board</h1>
    <div className = "Home">

    <p>There is something here for you on this Local Community Board! A simple way to reduce paper consumption and increase awareness of community activities, our online Community Board connects neigbors effortlessly. Viewing the <a href="/events">Events</a> tag will lead you to local gatherings such as farmers' markets, yard sales, and festivals. The <a href= "/classifieds">Classifieds</a>!</p>
    
    

    <Hashtags/>
    <Footer/>
  
   </div>
   </div>
  );
}

export default Home;
