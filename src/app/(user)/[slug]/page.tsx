import { SanityDocument } from "@sanity/client";
import { draftMode } from "next/headers";
import Post from "../../../../components/Post";
import PreviewProvider from "../../../../components/PreviewProvider";
import PreviewPost from "../../../../components/PreviewPost";
import { cachedClient } from "../../../../sanity/lib/sanity.client";
import { postPathsQuery, postQuery } from "../../../../sanity/lib/queries";
import { getCachedClient } from "../../../../sanity/lib/sanity.getClient";

export async function generateStaticParams() {
  const posts = await cachedClient(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const post = await getCachedClient(preview)<SanityDocument>(
    postQuery,
    params
  );

  if (preview?.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <Post post={post} />;
}
