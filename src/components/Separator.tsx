import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Separator as SeparatorComponent } from "@/components/ui/separator";

interface SeparatorProps {
  lengthNow?: number;
  length: number;
  searchParams: string;
}

const Separator = ({ length, searchParams, lengthNow }: SeparatorProps) => {
  return (
    <div className="mt-10">
      <SeparatorComponent className="mb-3" />
      <Link href={generatePageLink(searchParams)} scroll={false}>
        <div className="flex cursor-pointer items-center justify-center text-sm hover:text-blue-600">
          <p className="">
            {lengthNow === length ? "Sembunyikan" : `Tampilkan semua ${length}`}
          </p>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </div>
  );
};

export default Separator;

function generatePageLink(params: string) {
  const searchParams = new URLSearchParams(params);
  return `/?${searchParams.toString()}`;
}
