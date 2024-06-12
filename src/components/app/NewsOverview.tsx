import React from "react";
import ImageCard from "@/components/app/ImageCard";

type NewsOverviewProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};
export default function NewsOverview(props: NewsOverviewProps) {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              {props?.title || `What's happening`}
            </h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              {props?.description ||
                `Today's latest and greatest with yesterday's worst. Get more of what you don't want and less of what you need.`}
            </p>
          </div>
          <button className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 hover:dark:bg-gray-600 active:dark:bg-gray-600 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
            {props?.buttonText || `More`}
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-6 xl:gap-8 pb-4 md:pb-6 xl:pb-8">
          <ImageCard
            href="#"
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            alt="Photo by Minh Pham"
            label="VR"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <ImageCard
            href="#"
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            alt="Photo by Minh Pham"
            label="VR"
          />
          <ImageCard
            href="#"
            src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
            alt="Photo by Magicle"
            label="Tech"
            span
          />
          <ImageCard
            href="#"
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
            alt="Photo by Martin Sanchez"
            label="Dev"
            span
          />
          <ImageCard
            href="#"
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
            alt="Photo by Lorenzo Herrera"
            label="Retro"
          />
        </div>
      </div>
    </div>
  );
}
