import sanityClient from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url"
export const client = sanityClient({
    projectId:"iyqv48k2",
    dataset: 'production',
    apiVersion:"2023-03-26",
    useCdn: true,
    token:
    "skDaLaGqMgC4yon7rEQntk0ToWAKThcb8f8nfFSGaUs5LdQLHViCgVJuPiR83Bf2egRdXFZlWXJMPgpIi1WdTPAMWJHuPQ9wuFAh3wJXzngpJmQPZuia8T3ZSfnX7MCCmsIZhMwGnjG8qGzvnOTokKGR3SqYQs4o9z52NW5f8qX46h3nOVi4"


})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)