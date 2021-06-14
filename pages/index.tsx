import { GetStaticProps } from "next";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

interface PostData {
  date: string;
  id: string;
  title: string;
}
interface HomeProps {
  allPostsData: PostData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Oh Christ, Another X-Men Blog</title>
      </Head>
      <section>
        <h2 className="text-4xl font-bold font-heading border-b-2 border-gray-400">Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: PostData) => (
            <li key={id} className="flex flex-col">
              <span className="font-heading text-lg">{title}</span>
              <span>{new Date(date).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
