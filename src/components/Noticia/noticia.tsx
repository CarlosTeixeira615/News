import React from 'react';
import { Card } from '../Card/card';


interface NoticiaProps {
  noticia: {
    title: string;
    autor: string;
    description: string;
    urlToImage: string;
  }
}
export function Noticia(props: NoticiaProps) {
  return (
      <Card 
        urlToImage={props.noticia.urlToImage}
        title={props.noticia.title}
        description={props.noticia.description}
        autor={props.noticia.autor}
      />
  );
}
