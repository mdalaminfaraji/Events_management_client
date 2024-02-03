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
import ServiceForm from "./ServiceForm";

const AddServiceDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-2">
          <FaPlusCircle className="mr-1" /> Add Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <hr className="text-gray-700 mt-3" />
        <div className=" py-4">
          <ServiceForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceDialog;
