import { TimelineNav } from "@/components/TimelineNav";
import { TimelineContent } from "@/components/TimelineContent";

export const HistoryTimeline = () => {
  return (
    <section className="relative [align-items:normal] box-border caret-transparent gap-x-[normal] block grid-cols-none break-words gap-y-[normal] md:items-center md:gap-x-8 md:grid md:grid-cols-[max-content_1fr] md:gap-y-8">
      <TimelineNav />
      <TimelineContent />
    </section>
  );
};
