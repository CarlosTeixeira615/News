import styled from 'styled-components';

export const Content = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;
  
`


export const Container = styled.div`
  display: inline-block;
  height: 350px;
  width: 200px;

  margin: 1.3rem;

  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.5s;
  animation: ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }

  h3, p {
    margin: 0;
    padding: 0;
  }

` 

export const Imgcontainer = styled.div`
  img {
    height: 200px;
  }

`
export const Titlecontainer = styled.div`
  margin-bottom: 0.5rem;
  h3 {
    font-size: 1rem;
  }
`

export const Bodycontainer = styled.div`
  p {
    font-size: 0.8rem;
  }
`

export const Buttoncontainer = styled.div`
  display: flex;
  justify-content: center;
  
  button {
    background-color: white;
    border: none;
    transition: 0.2s;
    margin-bottom: 0.5rem;
    border-radius: 3px;

    &:hover {
      background: rgba(27, 156, 252, 0.1)
    }

    a{
      text-transform: uppercase;
      color: #1B9CFC;
      text-decoration: none;
      font-weight: bold;
    }

  }

  
`
