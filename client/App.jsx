import { Outlet } from 'react-router-dom';
import './App.css';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MainStyling = styled.div`
  padding-top: 0;
`;


function App() {

  return (
    <>
    <MainStyling>
      <main className="mx-3">
        <Outlet />
      </main>
    </MainStyling>
    </>
  )
}

export default App;


