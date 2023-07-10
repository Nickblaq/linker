import * as React from 'react'
import {
    BlendingModeIcon,
    BoxIcon,
    Component2Icon,
    DotsVerticalIcon,
    FaceIcon,
    Half2Icon,
    InfoCircledIcon,
    Link2Icon,
    ReaderIcon,
    TargetIcon,
  } from "@radix-ui/react-icons";
import Link from 'next/link';



const navigationList = [
    {
      href: "/",
      leadingIcon: <InfoCircledIcon />,
      name: "Inbox",
    },
    {
      active: true,
      href: "/",
      leadingIcon: <BlendingModeIcon />,
      name: "Assets",
    },
    {
      leadingIcon: <BoxIcon />,
      name: "Lineage",
      disabled: true,
    },
    {
      leadingIcon: <Component2Icon />,
      name: "Appeals",
      disabled: true,
    },
    {
      leadingIcon: <TargetIcon />,
      name: "Grants",
      disabled: true,
    },
    {
      leadingIcon: <Half2Icon />,
      name: "Policies",
      disabled: true,
    },
    {
      leadingIcon: <ReaderIcon />,
      name: "Reports",
      disabled: true,
    },
    {
      leadingIcon: <FaceIcon />,
      name: "Teams",
      disabled: true,
    },
    {
      leadingIcon: <Link2Icon />,
      name: "Connections",
      disabled: true,
    },
  ];



export default function Shield () {

    return (
        <>
        <div className='flex h-full'>
       
       
        <section className='flex-1 border border-gray-600 w-full overflow-hidden'>

        </section>
        </div>
        </>
    )
}