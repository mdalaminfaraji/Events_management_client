import axios from "axios";

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
