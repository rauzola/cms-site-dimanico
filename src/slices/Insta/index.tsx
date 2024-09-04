"use client"; // Adiciona esta linha no topo do arquivo

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Container, Avatar, Link, TitleInsta } from './styles';
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";

/**
 * Props for `Insta`.
 */
export type InstaProps = SliceComponentProps<Content.InstaSlice>;

/**
 * Component for "Insta" Slices.
 */
const Insta = ({ slice }: InstaProps): JSX.Element => {


  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    // O useEffect será executado apenas uma vez após o componente ser montado
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Limpeza do timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []); // Array de dependências vazio


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>

      {isLoading ? (
          <Loader />
        ) : ( 
        <>
        <Avatar
          src={slice.primary.foto_logo.url || ""} // se nao tiver a condição ele nao roda na vercel
          alt={slice.primary.foto_logo.alt || ""}
        />

        <TitleInsta>
          <PrismicRichText field={slice.primary.nome_descricao} />
        </TitleInsta>

        {slice.primary.linkbio.map((item: any, index: number) => (
          <Link
            key={index} // Adicione uma chave única
            href={(item.linkbio as { url: string }).url}
            target='_blank'
            Color={item.cor_do_campo}
          >
            {item.nomelink}
          </Link>
        ))}
        </>
        )}
      </Container>
    </section>
  );
};

export default Insta;
