import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

export async function Header() {
  
    const client = createClient();
    const settings = await client.getSingle("settings");
    const navigation = await client.getSingle("navigation");
  
    return (
      <Bounded as="header" yPadding="sm">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            {settings.data.logo_nome}

            {/* <PrismicText field={settings.data.logo_nome} /> */}
            {/* <PrismicNextImage field={settings.data.imgaem_logo} /> */}

          </PrismicNextLink>

          <nav>
            <ul className="flex flex-wrap gap-6 md:gap-10">
              {navigation.data?.links.map((item: any, index: number) => (
                <li
                  key={asText(item.label)}
                  className="font-semibold tracking-tight text-slate-800"
                >
                  <PrismicNextLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Bounded>
    );
  }
  