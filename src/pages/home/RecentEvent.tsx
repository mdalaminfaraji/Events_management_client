import { Button } from "@/components/ui/button";
import useRecentEvents from "@/hooks/useRecentEvents";

const RecentEvent = () => {
  const { data, isLoading, isError } = useRecentEvents();
  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (isError) {
    return <p>Something went wrong..............</p>;
  }

  // eslint-disable-next-line no-unsafe-optional-chaining
  const { title, description, images } = data?.data[0];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-24   justify-items-center items-center">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image?.image} alt={title} />
            </div>
          );
        })}
      </div>
      <div className="max-w-[518px]  ">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="text-lg text-[#566B84] mt-6">{description}</p>
        <Button className="mt-12  text-base px-8">Learn more</Button>
      </div>
    </div>
  );
};

export default RecentEvent;
