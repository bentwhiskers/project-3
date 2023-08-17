import NavBar from "./navbar";
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

export default function Header() {
  
  return (
   <div>
    <NavBar/>
    <h2
      css={{
        padding: '1rem',
        paddingBottom: '1px',
        textAlign: 'center',
        background: '#5B8E7D',
        color: 'white',
        fontSize: '40px',
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif',
      }}>
      Community Board
      <h4
      css={{
        fontSize: '20px',
        
      }}>
        Together Is Better.
      </h4>
    </h2>
    

   </div>
  );
}
