import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import groq from "groq";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-12-08',
  })

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}