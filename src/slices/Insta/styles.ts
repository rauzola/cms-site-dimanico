import styled from 'styled-components';

interface IColor {
  Color: string;
}

export const Container = styled.div`
  width: 100vw;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

export const TitleInsta = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const Link = styled.a<IColor>`
  width: 30%;
  height: 50px;
  background-color: transparent;
  margin: 1rem 0;
  border-radius: 0.5rem;
  border: 1px solid;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.Color || "#999495"};
    color: #fff;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: 0.5rem 0;
  }
`;
