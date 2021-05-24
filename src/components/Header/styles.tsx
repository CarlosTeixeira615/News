import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 130px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #FFFF;
    padding-left: 13%;
    font-size: 1.3rem;
  }

  h1 {
    color: #FFFF;
    padding-right: 3%;
    font-size: 3rem;
  }
`

export const Spacebetween = styled.div`
  display: space-between;
`