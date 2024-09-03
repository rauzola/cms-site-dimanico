"use client"; // Adiciona esta linha no topo do arquivo

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import {
  Container,
  Avatar,
  Link,
  TitleInsta,
  ThemeSwicher
} from './styles';
import { PrismicRichText } from "@/components/PrismicRichText";
import { useState } from "react";
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import { ThemeProvider } from "styled-components";

/**
 * Props for `Insta`.
 */
export type InstaProps = SliceComponentProps<Content.InstaSlice>;

/**
 * Component for "Insta" Slices.
 */
const Insta = ({ slice }: InstaProps): JSX.Element => {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const switchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Container>

          <Avatar
            src={slice.primary.foto_logo.url ? slice.primary.foto_logo.url : ""} // se nao tiver a condição ele nao roda na vercel
            alt={slice.primary.foto_logo.alt ? slice.primary.foto_logo.alt : ""}
          />

          <TitleInsta>
            <PrismicRichText field={slice.primary.nome_descricao} />
          </TitleInsta>

          <ThemeSwicher onClick={switchTheme}>
              <h1>h</h1>
            </ThemeSwicher>

            {slice.primary.linkbio.map((item: any) => (
            <>
              <Link
              isDarkTheme={isDarkTheme}
              href={(item.linkbio as { url: string }).url}
                target='_blank'
              >
                {item.nomelink}
              </Link>
            </>
          ))}

        </Container>
      </ThemeProvider>
    </section>
  );
};

export default Insta;
