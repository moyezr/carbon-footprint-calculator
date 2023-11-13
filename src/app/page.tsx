import Wrapper from "@/components/Wrapper";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen gradient w-screen flex items-center justify-center">
      <Wrapper classNames="flex flex-col items-center gap-[70px] mb-24">
        <h1 className="text-8xl text-black font-extrabold tracking-tighter text-center">
          Calculate Your Carbon Footprint
        </h1>
        <Link href={"/calculate"}>
          <button
            className={cn(
              "btn-grad rounded-full text-gray-200 text-3xl"
            )}
          >
            Calculate <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </Wrapper>
    </div>
  );
}
