import { Buttoncontainer, Container, Content, Imgcontainer, Titlecontainer } from './styles';

interface Noticia {
    title: string;
    autor: string;
    description: string;
    urlToImage: string;
}
export function Card(props: Noticia) {
  return (
    <Container>

      <Imgcontainer>
        <img src={props.urlToImage} alt='' />
      </Imgcontainer>

      <Content>

        <Titlecontainer>
          <h3>{props.title}</h3>
        </Titlecontainer>


      </Content>

      <Buttoncontainer>
        <button>
          <a href="../">
            View more
          </a>
        </button>
      </Buttoncontainer>

    </Container>
     
  )
}