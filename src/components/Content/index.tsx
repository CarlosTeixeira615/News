import { noticias } from "../../data";
import { Noticia } from "../Noticia/noticia";
import { Sectionln } from "./styles";

import Prismic from "@prismicio/client";
import { useEffect, useState } from "react";

const apiEndpoint = "https://newsjoao.cdn.prismic.io/api/v2";

const accessToken = ""; // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken });

interface NoticiaProps {
  title: string;
  autor: string;
  description: string;
  urlToImage: string;
}

export function Content() {
  const [docData, setDocData] = useState<NoticiaProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "news")
      );
      if (response) {
        console.log(response.results[0].data);
        setDocData([response.results[0] as any]);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Sectionln>
        <h1>LATEST NEWS</h1>
        {docData?.map((teste) => (
          <Noticia noticia={teste} />
        ))}
      </Sectionln>

      <Sectionln>
        <h1>SPORTS</h1>
        {noticias.map((data) => {
          return <Noticia noticia={data} />;
        })}
      </Sectionln>
    </main>
  );
}
