import { getEventItems } from "@/api/QueryFunction";
import { useQuery } from "@tanstack/react-query";

const useEventsItem = () => {
  const eventItems = useQuery({
    queryKey: ["events_item"],
    queryFn: getEventItems,
  });
  return eventItems;
};

export default useEventsItem;
