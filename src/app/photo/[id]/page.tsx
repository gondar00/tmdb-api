"use client";
import {
  ArrowLeftCircleIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CameraIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const photos = [
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

const PhotoDetail = ({ params: { id } }) => {
  const photo = photos[id];

  if (!photo) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] min-h-screen">
      <div className="p-10">
        <div className="sticky top-10">
          <motion.div
            className="flex justify-between mb-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
          >
            <Link
              className="inline-flex items-center rounded-md border border-gray-300 bg-white pl-3 pr-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-200 focus:outline-0 focus:ring-2 focus:ring-purple-300 group"
              href="/"
            >
              <ArrowLeftCircleIcon className="w-5 h-5 mr-2 text-gray-300 group-hover:text-purple-200" />
              Back
            </Link>
            <a
              href={photo.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-purple-600 text-sm tracking-tight font-medium focus:outline-0 focus:ring-2 focus:ring-purple-400 group"
            >
              View Source
              <ArrowUpRightIcon className="w-4 h-4 text-gray-400 ml-2 group-hover:text-purple-400" />
            </a>
          </motion.div>
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
            className="text-4xl font-bold tracking-tight"
          >
            {photo.title}
          </motion.h2>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            className="mt-5 text-sm text-gray-600 space-y-2"
          >
            <p className="flex items-center">
              <CameraIcon className="w-4 h-4 mr-2 text-purple-500" />
              {photo.author}
            </p>
            <p className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-2 text-purple-500" />
              {photo.location}
            </p>
            <p className="flex items-center">
              <CalendarDaysIcon className="w-4 h-4 mr-2 text-purple-500" />
              {photo.date}
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
            }}
            className="mt-5 text-sm text-gray-500 space-y-5"
          >
            {/* <LoremIpsum p={2} /> */}
          </motion.div>
        </div>
      </div>
      <div className="overflow-hidden flex">
        <Image
          src={photo.src}
          alt={photo.title}
          placeholder="blur"
          blurDataURL={photo.placeholder}
          width={photo.width}
          height={photo.height}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
export default PhotoDetail;
