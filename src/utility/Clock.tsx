import { useEffect, useState } from "react";

import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(dayjs());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(dayjs());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Run the effect only once on component mount

  return (
    <div className="text-right text-xl font-semibold pr-3">
      {dayjs.utc(currentDateTime).local().format("LLL")}
    </div>
  );
};

export default Clock;
