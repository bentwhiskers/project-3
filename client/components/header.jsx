import NavBar from "./navbar";
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export default function Header() {
  
  return (
   <div>
   
    <h2
      css={{
        padding: '1rem',
        margin: '0',
        textAlign: 'center',
        background: '#5B8E7D',
        borderRadius: '10px',
        color: 'white',
        fontSize: '40px',
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif',
      }}>
      Community Board
      
    </h2>
    <h4
      css={{
        fontSize: '20px',
        fontStyle: 'italic',
        paddingTop: '0',
        marginTop: '0',
        marginBottom: '1rem'
        
      }}>
        Together Is Better.
      </h4>
    <NavBar/>

   </div>
  );
}
