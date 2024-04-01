"use client"

import { MdDomainVerification } from "react-icons/md"
import { ImStatsBars } from "react-icons/im"
import { TbLayoutDashboard } from "react-icons/tb"
import { AiFillCalendar } from "react-icons/ai"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import logo from "@/assets/imagens/logo.webp"

export const Menu = () => {
  return (
    <div className="flex flex-col min-h-[100vh] min-w-[224px] py-6 space-y-8 w-56 bg-[#1a191b] overflow-hidden">
      <Image
        className="self-center w-[61px] lg:w-[120px]"
        src={logo}
        alt="vai"
      />
      <Link
        className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        href={"/"}
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-home"></i>
        </span>
        <span className="text-sm font-medium">Dashboard</span>
        <TbLayoutDashboard className=" flex flex-row items-center    absolute left-2 top-{-1} h-6 w-12 " />
      </Link>
      <Link
        href="#"
        className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-music"></i>
        </span>
        <span className="text-sm font-medium">Stats</span>
        <ImStatsBars className="flex flex-row items-center   absolute left-2 top-{-1} h-6 w-12 " />
      </Link>
      <Link
        href="#"
        className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-drink"></i>
        </span>
        <span className="text-sm font-medium">Events</span>
        <AiFillCalendar className="flex flex-row items-center   absolute left-2 top-{-1} h-6 w-12 " />
      </Link>
      <Link
        href="/verification"
        className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-shopping-bag"></i>
        </span>
        <span className="text-sm font-medium">Verification</span>
        <MdDomainVerification className="flex flex-row items-center   absolute left-2 top-{-1} h-6 w-12 " />
      </Link>
    </div>
  )
}
export default Menu
