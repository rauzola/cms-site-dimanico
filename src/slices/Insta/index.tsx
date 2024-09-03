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



  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    >
        <Container>
        {/* inicio */}

        <Avatar src={slice.primary.foto_logo.url} alt={slice.primary.foto_logo.alt} />


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
