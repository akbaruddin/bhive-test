/* eslint-disable @next/next/no-img-element */
"use client";
import { useSpacesServices } from "@/hooks/useSpacesServices";
import ArrowsIcon from "../Icons/ArrowsIcon";
import RouteIcon from "../Icons/RouteIcon";
import { useEffect, useState } from "react";
import { calculateDistance, getCurrentLocation } from "@/utils/helper";
import MoboArrow from "../Icons/MoboArrow";

export interface IDayPassDiscountsPercentage {
  value: number;
  message: string;
}

export interface ISpace {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: unknown;
  rules: unknown;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name: string;
  facilities: unknown;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    "1": IDayPassDiscountsPercentage;
    "10": IDayPassDiscountsPercentage;
  };
  manager_id: unknown;
  userLocation: { latitude: number; longitude: number };
}

function Space({
  name,
  images,
  day_pass_price,
  day_pass_discounts_percentage,
  google_maps_url,
  userLocation,
  latitude,
  longitude,
}: ISpace) {
  const tenDay = day_pass_price * 10;
  const discount = tenDay * (1 - day_pass_discounts_percentage[10].value / 100);

  return (
    <div className="border border-[#EEE7E7CC] p-3 rounded-lg bg-white shadow-md">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl min-h-[56px]">{name}</div>
        <a
          href={google_maps_url}
          target="_blank"
          className="border-[0.4px] cursor-pointer size-[44px] border-[#EEE7E7] bg-[#F9F9F9] rounded-md text-[#26323880] flex items-center justify-center"
        >
          <span className="text-center">
            <RouteIcon className="inline-block pointer-events-none" />
            <span className="text-[8px] block">
              {calculateDistance(
                userLocation.latitude,
                userLocation.longitude,
                latitude,
                longitude
              ).toFixed(0)}{" "}
              kms
            </span>
          </span>
        </a>
      </div>
      <div className="overflow-hidden rounded-md relative mt-[18px]">
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE}/${images[0]}`}
          className="w-full aspect-video"
          alt={name}
        />
      </div>
      <div className="flex justify-between items-center mt-[18px] gap-3">
        <div className="bg-[#F9F9F9] border-[0.5px] border-[#EEE7E7] rounded-md p-3 relative w-1/2">
          <p className="text-xs md:text-sm lg:text-base">Day Pass</p>
          <p className="text-[#263238CC] text-lg lg:text-xl font-semibold">
            ₹ {day_pass_price}
            <span className="opacity-80 text-xs font-medium">/ Day</span>
          </p>
          <span className="absolute right-2 inset-y-0 flex items-center">
            <ArrowsIcon />
          </span>
        </div>
        <div className="bg-[#FFCF4B] border border-[#FFC422] rounded-md p-3 relative w-1/2">
          <p className="text-xs  md:text-sm lg:text-base">Day Pass</p>
          <p className="text-[#263238CC] text-lg md:text-xl font-semibold">
            ₹ {discount.toFixed(0)}
            <span className="opacity-80 text-xs font-medium">/10 Day</span>
          </p>
          <div className=" absolute -top-3 inset-x-0 text-center">
            <span className="text-[8px] font-medium text-[#FFFDF7] bg-[#263238] border border-[#263238] px-2 py-1 rounded">
              {day_pass_discounts_percentage[10].value}% Discount
            </span>
          </div>
          <span className="absolute right-2 inset-y-0 flex items-center">
            <ArrowsIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Spaces() {
  const { data } = useSpacesServices();
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const setLocation = async () => {
    try {
      const userLocation = await getCurrentLocation();
      setUserLocation({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLocation();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 mt-9">
      <h2 className="text-[#263238] font-bold text-2xl md:text-4xl mb-5 md:mb-10 flex justify-between items-center">
        Our Space Overview
        <MoboArrow className="md:hidden" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
        {data?.map((space: ISpace) => (
          <Space key={space.id} {...space} userLocation={userLocation} />
        ))}
      </div>
    </section>
  );
}
