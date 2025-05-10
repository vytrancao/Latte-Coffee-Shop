'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";

type CardProps = {
    imageSrc: StaticImageData;
    imageAlt: string;
};

export default function Card({ imageSrc, imageAlt }: CardProps) {
    return (
        <article className="group m-[0.1rem] w-[275px] max-w-full bg-white rounded-xl text-gray-900 border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            {/* ==========================Drink pic========================= */}
            <section className="relative bg-yellow-100 rounded-t-xl p-0 text-sm overflow-hidden">
                {/* Image */}
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-48 object-cover rounded-xl"
                />
            </section>
            { }

            {/* =========================Drink Name========================== */}
            <footer className="flex flex-col md:flex-row md:justify-between md:items-center p-3 gap-4 font-bold text-sm">
                <div className="flex items-center gap-3">
                    <div>
                        <p className="text-base font-bold transition-colors duration-300 group-hover:text-[#a2af7f]">
                            {imageAlt}
                        </p>
                        <p className="text-xs font-normal text-gray-500">Thưởng thức cà phê sữa đá ngon đúng điệu.</p>
                    </div>
                </div>
                {/* =================================================== */}
            </footer>
        </article>
    );
};