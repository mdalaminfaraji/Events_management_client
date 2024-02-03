import axios from "axios";
export type Tbody = {
  title: string;
  description: string;
  features: string[];
  servicesImage: File | null;
};
export const getRecentEvents = async () => {
  return await axios.get(
    "https://events-management-nsnv.onrender.com/api/events/"
  );
};

export const getEventItems = async () => {
  return await axios.get(
    "https://events-management-nsnv.onrender.com/api/eventItem/"
  );
};

export const getOurServices = async () => {
  return await axios.get(
    "https://events-management-nsnv.onrender.com/api/services/"
  );
};
export const getSingleServices = async (id: number) => {
  return await axios.get(
    `https://events-management-nsnv.onrender.com/api/services/${id}`
  );
};
