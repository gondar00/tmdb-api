'use client'

import Image from "next/image";
import Link from "next/link";

export const photos = [
  {
    id: 0,
    src:
      "https://images.unsplash.com/photo-1526731530795-375e081e6154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1526731530795-375e081e6154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title: "Summer is here at last.",
    link: "https://unsplash.com/photos/aBJBMYwzEd8",
    author: "Photo by Paul Rysz",
    location: "Aberdeen, United Kingdom",
    date: "Published on May 19, 2018",
    width: 1300,
    height: 1980,
  },
  {
    id: 1,
    src:
      "https://images.unsplash.com/photo-1554311825-6f9e499ba167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1554311825-6f9e499ba167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title: "Sunrise over the rocks",
    link: "https://unsplash.com/photos/Xqmj-oQ_Nek",
    author: "Photo by David Boca",
    location: "Peroj, Croatia",
    date: "Published on April 3, 2019",
    width: 1300,
    height: 1980,
  },
  {
    id: 2,
    src:
      "https://images.unsplash.com/photo-1604323840993-31ba40161d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1604323840993-31ba40161d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title: "Visit Venice at least once in your life!",
    link: "https://unsplash.com/photos/l6Ezx0k8c8c",
    author: "Photo by Alen Rojnic",
    location: "Venice, Italy",
    date: "Published on November 2, 2020",
    width: 1300,
    height: 1980,
  },
  {
    id: 3,
    src:
      "https://images.unsplash.com/photo-1607344563948-8eb7855393b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1607344563948-8eb7855393b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title: "Streams of peace",
    link: "https://unsplash.com/photos/797pFBFMI5s",
    author: "Photo by Neil Mark Thomas",
    location: "Llyn Ogwen, United Kingdom",
    date: "Published on December 7, 2020",
    width: 1300,
    height: 1980,
  },
  {
    id: 4,
    src:
      "https://images.unsplash.com/photo-1509839914329-d4beac94085f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1509839914329-d4beac94085f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title: "Teal in the artic",
    link: "https://unsplash.com/photos/pr5sIzsWPvg",
    author: "Photo by Ernesto Leon",
    location: "Huascaran, Peru",
    date: "Published on November 4, 2017",
    width: 1300,
    height: 1980,
  },
  {
    id: 5,
    src:
      "https://images.unsplash.com/photo-1603659514658-cb2ea72620bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1603659514658-cb2ea72620bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title: "Cedars for days",
    link: "https://unsplash.com/photos/33lF7-_S-Vw",
    author: "Photo by Elias Maurer",
    location: "Rote Wand, Tyrnau, Österreich",
    date: "Published on October 25, 2020",
    width: 963,
    height: 1541,
  },
  {
    id: 6,
    src:
      "https://images.unsplash.com/photo-1609154767012-331529e7d73b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1609154767012-331529e7d73b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title: "Surreal bench at sunrise",
    link: "https://unsplash.com/photos/hVKXCpdNnW8",
    author: "Photo by Egzon Muliqi",
    location: "Unknown",
    date: "Published on December 28, 2020",
    width: 1300,
    height: 1980,
  },
  {
    id: 7,
    src:
      "https://images.unsplash.com/photo-1603572161235-cdc0524b5c3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    placeholder:
      "https://images.unsplash.com/photo-1603572161235-cdc0524b5c3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=45&h=63&q=80",
    title:
      "A view of a starry night sky with the Milky Way Galaxy on Del Valle in Livermore, California.",
    link: "https://unsplash.com/photos/0CDogO-dEEE",
    author: "Photo by ",
    location: "Del Valle Regional Park, CA, US",
    date: "Published on October 24, 2020",
    width: 1300,
    height: 1980,
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 p-8 flex rounded-2xl items-center">
          <h1 className="font-extrabold text-3xl xl:text-5xl text-indigo-200 leading-tight">
            Page Transitions in{" "}
            <a href="https://nextjs.org" className="text-white">
              Next.js
            </a>{" "}
            with{" "}
            <a href="https://www.framer.com/motion/" className="text-white">
              Framer Motion
              <span className="text-purple-300">.</span>
              <span className="text-purple-300/70">.</span>
              <span className="text-purple-300/40">.</span>
              <span className="text-purple-300/10">.</span>
            </a>
          </h1>
        </div>
        {photos.map((photo) => (
          <Link
            className="overflow-hidden flex rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:z-10 transition-all ease-in-out"
            href={`/photo/${photo.id}`}
            scroll={false}
            key={photo.id}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              placeholder="blur"
              blurDataURL={photo.placeholder}
              width={photo.width}
              height={photo.height}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
