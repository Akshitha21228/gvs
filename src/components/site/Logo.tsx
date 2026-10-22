// import { company } from "@/data/company";
// import { cn } from "@/lib/utils";

// /** Original GVS logo (white background) shown on a white plate so it reads on dark sections unaltered. */
// export function Logo({ className }: { className?: string }) {
//   return (
//     <span className={cn("inline-flex items-center rounded-md bg-background px-2 py-1", className)}>
//       <img src={company.logo} alt="Green Vision Solutions (GVS) logo" width={204} height={100} className="h-full w-auto" />
//     </span>
//   );
// }
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img 
        src={company.logo} 
        alt="Green Vision Solutions (GVS) logo" 
        className="h-16 w-auto object-contain scale-125" 
      />
    </span>
  );
}