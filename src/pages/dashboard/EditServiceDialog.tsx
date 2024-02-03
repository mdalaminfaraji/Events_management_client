/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TiEdit } from "react-icons/ti";
import EditServiceForm from "./EditService";

const EditServiceDialog = ({ service }: any) => {
  console.log(service);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-2">
          <TiEdit className="mr-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
        </DialogHeader>
        <hr className="text-gray-700 mt-3" />
        <div className=" py-4">
          <EditServiceForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditServiceDialog;
