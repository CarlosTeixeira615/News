import { noticias } from "../../data";
import { Noticia } from '../Noticia/noticia';
import { Sectionln,  } from './styles';

import Prismic from '@prismicio/client'
import { useEffect, useState } from 'react';

const apiEndpoint = 'https://newsjoao.cdn.prismic.io/api/v2'

const accessToken = '' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

interface NoticiaProps {
    title: string;
    autor: string;
    description: string;
    urlToImage: string;
}

export function Content() {

  const [doc, setDocData] = useState<NoticiaProps[]>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'news')
      )
      if (response) {
        setDocData(response.results[0] as any)
      }
    }
    fetchData()
  }, [])

  return (

        <main>
          <Sectionln>
            <h1>LATEST NEWS</h1> 
            {doc?.map(data => {
              return (
                <Noticia noticia={data}/>
              );
            })}
          </Sectionln>

          <Sectionln>
            <h1>SPORTS</h1>
            {noticias.map(data => {
              return (
                <Noticia noticia={data}/>
              );
            })}
          </Sectionln>
        </main>
 
  )
}