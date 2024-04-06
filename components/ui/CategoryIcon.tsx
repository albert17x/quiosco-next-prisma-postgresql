"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from 'next/navigation'
import { Category } from "@prisma/client";

type CategoryIconProps = {
    categorymap: Category;
};
export default function CategoryIcon({ categorymap }: CategoryIconProps) {
    const params = useParams<{category: string}>()
   
    return (
        <div
            className={`${categorymap.slug === params.category ? 'bg-amber-400' : ''} flex items-center gap-4  w-full border-t border-gray-200 p-3`}>
            <div className=" w-16 h-16 relative">
                <Image
                    //  width={64}
                    //  height={64}
                    fill
                    src={`/icon_${categorymap.slug}.svg`}
                    alt="Imagen Categoria"
                />
            </div>
            <Link
                className="text-xl font-bold"
                href={`/order/${categorymap.slug}`}>
                {categorymap.name}
            </Link>
        </div>
    );
}
