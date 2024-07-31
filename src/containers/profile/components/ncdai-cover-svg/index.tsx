import { NCDaiLockup } from "@/components/brand";

export const NCDaiCoverSVG = () => {
  return (
    <div className="aspect-h-1 aspect-w-2 flex w-full select-none rounded-xl border border-slate-800/50 bg-slate-700 shadow-lg dark:bg-slate-950">
      <div className="flex items-center justify-center text-white">
        <NCDaiLockup className="h-6 sm:h-8" />
      </div>
    </div>
  );
};
