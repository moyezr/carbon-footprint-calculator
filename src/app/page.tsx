import Wrapper from "@/components/Wrapper";
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
          <Button className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-cyan-600 to-green-600 max-w-fit p-4 px-8 rounded-full flex items-center gap-2">
            Calculate <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </Wrapper>
    </div>
  );
}
