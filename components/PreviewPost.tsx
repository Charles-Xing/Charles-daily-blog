"use client";

import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from "../sanity/lib/queries";
import Post from "./Post";

export default function PreviewPost({ post }: { post: SanityDocument }) {
  const params = useParams() as Record<string, string | string[]> | null;
  const [data] = useLiveQuery(post, postQuery);

  return <Post post={data} />;
}
