import { cn } from "@/lib/utils";
import { ExperienceStack, TechStack } from "@prisma/client";

type TechStackType = ExperienceStack & {
  techStack: TechStack;
};

interface TechStackProps {
  data: any;
}

const TechStackItem = ({ data }: TechStackProps) => {
  return (
    <div className="flex">
      {data.slice(0, 2).map((stack: TechStackType) => (
        <div className="flex space-x-1 text-sm" key={stack.id}>
          {stack.techStack.title}
          <span
            className={cn("", data.length > 2 ? "mr-0 block" : "mr-1", {
              hidden: data[data.slice(0, 2).length - 1].id === stack.id,
            })}
          >
            ,
          </span>
          <span
            className={cn("hidden", {
              "block cursor-pointer hover:text-blue-600": data.length > 2,
            })}
          >
            {data[data.slice(0, 2).length - 1].id === stack.id &&
              `dan +${data.length} keahlian`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStackItem;
