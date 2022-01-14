import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>THe News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-is-great">NextJS is A Great Framework</Link>
        </li>
        <li>
          <Link href="/news/nuxt-is-great">NuxtJS is A Great Framework</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
