import React from "react";
import Logo from "../Logo";
import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <section classname="relative overflow-hidden py-10">
            <div classname="relative z-10 mx-auto max-w-7xl px-4">
                <div classname="-m-6 flex flex-wrap">
                <div classname="w-full p-6 md:w-1/2 lg:w-5/12">
                    <div classname="flex h-full flex-col justify-between">
                    <div classname="mb-4 inline-flex items-center">
                        <Logo width="100px"/>
                    </div>
                    <div>
                        <p classname="text-sm text-gray-600">
                        © Copyright 2022. All Rights Reserved by DevUI.
                        </p>
                    </div>
                    </div>
                </div>
                <div classnamename="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div classname="h-full">
                    <h3 classname="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Company
                    </h3>
                    <ul>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Features
                        </Link>
                        </li>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Pricing
                        </Link>
                        </li>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Affiliate Program
                        </Link>
                        </li>
                        <li>
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Press Kit
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div classname="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div classname="h-full">
                    <h3 classname="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Support
                    </h3>
                    <ul>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Account
                        </Link>
                        </li>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Help
                        </Link>
                        </li>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Contact Us
                        </Link>
                        </li>
                        <li>
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Customer Support
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div classname="w-full p-6 md:w-1/2 lg:w-3/12">
                    <div classname="h-full">
                    <h3 classname="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Legals
                    </h3>
                    <ul>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Terms &amp; Conditions
                        </Link>
                        </li>
                        <li classname="mb-4">
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Privacy Policy
                        </Link>
                        </li>
                        <li>
                        <Link
                            classname=" text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/"
                        >
                            Licensing
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}