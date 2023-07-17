import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";
// import { cache } from "react";

// export function getClient(preview?: { token?: string }): SanityClient {
//   const client = createClient({
//     projectId,
//     dataset,
//     apiVersion,
//     useCdn,
//     perspective: "published",
//   });
//   if (preview) {
//     if (!preview.token) {
//       throw new Error("You must provide a token to preview drafts");
//     }
//     return client.withConfig({
//       token: preview.token,
//       useCdn: false,
//       ignoreBrowserTokenWarning: true,
//       perspective: "previewDrafts",
//     });
//   }
//   return client;
// }

// export const getCachedClient = (preview?: { token?: string }) => {
//   const client = getClient(preview);

//   return cache(client.fetch.bind(client));
// };

// 我们将client变量定义在了getClient函数的上方，并使用getClient函数创建了Sanity客户端实例。然后，我们将这个实例传递给cache函数，将其缓存为cachedClient
import { cache } from "react"

// other imports and createClient
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});
// Add cachedClient export
export const cachedClient = cache(client.fetch.bind(client))