import styled from 'styled-components';

export const CounerSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid ${p => p.theme.colors.text};
width: 250px;
height: 100px;
margin: 0 auto;
margin-top: 40px;
margin-bottom: 40px;
padding: 10px;
`;

export const CounerValue = styled.span`
color: green;
font-size: 30px;
font-weight: 800;
`;

export const CounterControls = styled.div`
display: flex;
gap: 10px;
`;

export const ButtonIncrease = styled.button``;

export const ButtonDecrease = styled.button``;