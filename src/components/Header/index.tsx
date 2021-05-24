import { Container, Content } from './styles';
import { ImEarth } from 'react-icons/im'
export function Header() {
  return (
    <Container >
      <Content>
        <h1>GoldenCity News</h1>
        <ImEarth color="white" font-size="3em"/>
        <span>O melhor portal de notícias de Dourados-MS!</span>
      </Content>
    </Container>
  );
}