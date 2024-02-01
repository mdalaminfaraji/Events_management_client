import { getOurServices } from "@/api/QueryFunction";
import { useQuery } from "@tanstack/react-query";

const useOurServices = () => {
  const Services = useQuery({
    queryKey: ["services"],
    queryFn: getOurServices,
  });
  return Services;
};

export default useOurServices;
