
import Footer from "../components/footer";
import Hashtags from "../components/hashtags";

function Home() {
  return (
   <div>
    <h2>Home Page</h2>
    <div className = "Home">
    <p>Stardew community board vibes</p>
   
    <Hashtags/>
    <Footer/>
   </div>
   </div>
  );
}

export default Home;
