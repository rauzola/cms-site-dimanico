"use client"; // Adiciona esta linha no topo do arquivo

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Container, Avatar, Link, TitleInsta } from './styles';

/**
 * Props for `Insta`.
 */
export type InstaProps = SliceComponentProps<Content.InstaSlice>;

/**
 * Component for "Insta" Slices.
 */
const Insta = ({ slice }: InstaProps): JSX.Element => {

  console.log(slice.primary.foto_logo.alt)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
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
      </Container>
    </section>
  );
};

export default Insta;
