import Header from "../components/header";
import Footer from "../components/footer";
import ClassPost from "./classPost"
export default function Classifieds() {
  return (
   <div>
    <Header/>
    <h2>Classifieds Page</h2>

    <p>
    
    Post something you're looking to buy or sell! <a href = "/search">Search</a> for something!
    </p>
    <ClassPost/>
    <Footer/>
   </div>
  );
}

