import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  // {router.query.newsId} : get router parameter
  return <h1>Something Important : {router.query.newsId}</h1>;
}

export default DetailPage;
