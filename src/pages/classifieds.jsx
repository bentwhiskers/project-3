import Header from "../components/header";
import Footer from "../components/footer";

export default function Classifieds() {
  return (
   <div>
    <Header/>
    <h2>Classifieds Page</h2>

    <p>
    
    <a href = "/classPost"> Post</a> something you're looking to buy or sell! <a href = "/search">Search</a> for something!
    </p>
    
    <Footer/>
   </div>
  );
}

