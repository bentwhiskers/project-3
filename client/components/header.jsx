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
        fontStretch: 'expanded',
        textShadow: '2px 2px 5px #E3E3E3',
      }}>
      LocaleLink<i className='fas fa-link'></i>
    </h2>
    <h4
      css={{
        color: 'white',
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
