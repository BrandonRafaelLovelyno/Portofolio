import DashboardIconBox from "@/components/trigger/detail-page/box/dashboard-icon-box";
import DashboardPlaceholderBox from "@/components/trigger/detail-page/box/dashboard-placeholder-box";
import DashboardTextBox from "@/components/trigger/detail-page/box/dashboard-text-box";
import AnimatedNumber from "@/components/trigger/detail-page/other/animated-number";
import Image from "next/image";
import React from "react";
import { TbClockHour5 } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const index = 0;

const CUSTOMER_SERVICE_DASHBOARD: React.ReactNode[] = [
  <DashboardPlaceholderBox backgroundColor="bg-black" key={index}>
    <DashboardTextBox
      Icon={
        <Image
          src={"/image/work-exp/assets/why.png"}
          width={30}
          height={30}
          alt="goals"
        />
      }
      color="white"
      title="Why"
    >
      <p className="font-semibold">
        Upskill my communication skill and save some money
      </p>
    </DashboardTextBox>
  </DashboardPlaceholderBox>,
  <DashboardPlaceholderBox backgroundColor="bg-black" key={index + 1}>
    <DashboardTextBox
      Icon={
        <Image
          src={"/image/work-exp/assets/how.png"}
          width={30}
          height={30}
          alt="goals"
        />
      }
      color="white"
      title="How"
    >
      <p className="font-semibold">
        I take 2 hours shifts a day as customer service
      </p>
    </DashboardTextBox>
  </DashboardPlaceholderBox>,
  <DashboardPlaceholderBox
    classname="w-full"
    backgroundColor="bg-black"
    borderColor="border-workPrimary"
    key={index + 2}
  >
    <DashboardIconBox
      Icon={<TbClockHour5 size={50} className="text-workPrimary" />}
      title={"Total shifts"}
      titleColor="text-workPrimary"
      Value={
        <div
          className={twMerge(
            "w-full h-fit",
            "flex flex-row justify-center items-end "
          )}
        >
          <div
            className={twMerge(
              "w-[130px] h-fit",
              "flex flex-row justify-center items-center"
            )}
          >
            <AnimatedNumber
              max={765}
              reset={5000}
              fontSize={50}
              className="font-extrabold text-workPrimary"
            />
          </div>
          <p className="text-xl font-bold text-workPrimary">Hours</p>
        </div>
      }
    />
  </DashboardPlaceholderBox>,
  <DashboardPlaceholderBox
    key={index + 3}
    backgroundColor="bg-black"
    classname="w-full"
  >
    <DashboardTextBox
      Icon={
        <Image
          src={"/image/work-exp/customer-service/assets/shop.png"}
          alt="employer"
          width={25}
          height={25}
        />
      }
      color="white"
      title="I Work For"
    >
      <div className={twMerge("flex flex-col items-center", "gap-y-5")}>
        <div className={twMerge("flex flex-col items-center", "gap-y-3")}>
          <Image
            src={
              "/image/work-exp/customer-service/assets/yovitashopcollection.png"
            }
            alt="employer"
            objectFit="cover"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className={twMerge("font-bold")}>Yovita Shop Collection</p>
        </div>
        <p className="text-center">Shopee and Lazada online shop which sells</p>
      </div>
    </DashboardTextBox>
  </DashboardPlaceholderBox>,
];

export default CUSTOMER_SERVICE_DASHBOARD;
