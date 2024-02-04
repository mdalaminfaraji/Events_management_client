import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaPlusCircle } from "react-icons/fa";
import EventItemForm from "./EventItemForm";

const AddEventItem = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-2">
          <FaPlusCircle className="mr-1" /> Add Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <hr className="text-gray-700 mt-3" />
        <div className=" py-4">
          <EventItemForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventItem;
