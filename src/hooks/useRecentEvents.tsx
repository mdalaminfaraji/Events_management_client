import { getRecentEvents } from "@/api/QueryFunction";
import { useQuery } from "@tanstack/react-query";

const useRecentEvents = () => {
  const Events = useQuery({
    queryKey: ["recent_events"],
    queryFn: getRecentEvents,
  });
  return Events;
};

export default useRecentEvents;
