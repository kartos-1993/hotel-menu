import React from 'react';
import styled from "styled-components"


function Dashboard(props) {
    console.log("Dashboard props", props);
    return ( 
    <DashboardMain >
        <h2> Welcome to pinus hotel menu. </h2>         
    </DashboardMain>
    );
}

export default Dashboard;

const DashboardMain = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
text-align: center;

& h2{
    padding: 10px;
    margin-bottom: 40px;
}
`