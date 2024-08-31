import { createClient } from "../prismicio";

export default async function QuemSomos() {

  const prismic = createClient()

  const about = await prismic.getByUID("about", "about-teste")

  console.log(JSON.stringify(about.data, null, 2))

  return (
    <>
      <h1>quemsomos</h1>
    </>
  );
}
