"use client"; // Adiciona esta linha no topo do arquivo

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import {
  Container,
  Avatar,
  ThemeSwicher,
  Link,
  Loader,
  TitleInsta
} from './styles';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * Props for `Insta`.
 */
export type InstaProps = SliceComponentProps<Content.InstaSlice>;

/**
 * Component for "Insta" Slices.
 */
const Insta = ({ slice }: InstaProps): JSX.Element => {

  const img = slice.primary.foto_logo.url;
  const alt = slice.primary.foto_logo.alt;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        {/* inicio */}

        <img
          src="https://images.prismic.io/sozinho/Ztb7eLzzk9ZrW6zG_projetomaisvida.jpg?auto=format,compress&rect=0,8,217,217&w=112&h=112"
          alt="ioeuisoefu"
          className="w-[120px] h-[120px] rounded-full mb-2"
        />

        <Avatar src="https://images.prismic.io/sozinho/Ztb7eLzzk9ZrW6zG_projetomaisvida.jpg?auto=format,compress&rect=0,8,217,217&w=112&h=112"
        alt="ei wojfiowejf" />


        <TitleInsta>
          <PrismicRichText field={slice.primary.nome_descricao} />
        </TitleInsta>


        {slice.primary.linkbio.map((item) => (
          <>
            <Link
              href={(item.linkbio as { url: string }).url}
              target='_blank'
            >
              {item.nomelink}
            </Link>
          </>
        ))}

        {/* fim */}
      </Container>
    </section>
  );
};

export default Insta;
