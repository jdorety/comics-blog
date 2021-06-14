import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";

interface PostData {
  title: string;
  id: string;
  data: string;
}

interface PostProps {
  postData: PostData;
}

export default function Post({ postData }: PostProps) {
  return <h1>{postData.title}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.id);
  return {
    props: {
      postData,
    },
  };
};
