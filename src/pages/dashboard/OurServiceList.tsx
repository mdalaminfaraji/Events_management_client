/* eslint-disable @typescript-eslint/no-explicit-any */
import useOurServices from "@/hooks/useOurServices";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Swal from "sweetalert2";
import { TiEdit } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import AddServiceDialog from "./AddServiceDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useState } from "react";
import EditServiceForm from "./EditService";
type Tservices = {
  id: number;
  title: string;
  features: string[];
};

interface ServiceFormProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  servicesImage: File | null;
}

const OurServiceList = () => {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<ServiceFormProps>({
    id: "",
    title: "",
    description: "",
    features: [],
    servicesImage: null,
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      return await axios.delete(
        `https://events-management-nsnv.onrender.com/api/services/${id}/`
      );
    },
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (error) => {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something Wrong ",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
  const { data: Services, isLoading, isError } = useOurServices();

  if (isLoading) {
    return <p>Loading...........</p>;
  }
  if (isError) {
    return <p>Something went wrong ...........</p>;
  }

  const handleEdit = (id: number) => {
    setService({
      id: "",
      title: "",
      description: "",
      features: [],
      servicesImage: null,
    });

    const service = Services?.data.find((item: any) => item.id === id);
    if (service) {
      setService(service);
      setOpen(true);
    }
  };

  const handleDelete = (id: number) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // await axios
        //   .delete(
        //     `https://events-management-nsnv.onrender.com/api/services/${id}/`
        //   )
        //   .then((data) => {
        //     console.log(data);
        //   });

        mutation.mutate(id);

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="">
      <h1 className="text-center text-2xl py-2">Available Services</h1>
      <div className="text-right pr-4">
        <AddServiceDialog />
      </div>
      <Table className="w-[700px] md:w-[1000px] lg:w-[1200px] overflow-x-auto mx-auto mt-3">
        <TableHeader className="bg-black ">
          <TableRow className="text-white">
            <TableHead className="w-[100px] text-white">ServiceID</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">features</TableHead>
            <TableHead className="text-right text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-x-auto">
          {Services?.data?.map(({ id, title, features }: Tservices) => {
            return (
              <TableRow key={uuidv4()}>
                <TableCell className="font-medium">#{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>
                  {features.map((item) => {
                    return <p key={uuidv4()}>{item}</p>;
                  })}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="secondary"
                    className="text-red-500 hover:bg-red-500 hover:text-white  mr-1"
                    onClick={() => handleDelete(id)}
                  >
                    <FaRegTrashAlt />
                  </Button>
                  <Button
                    variant="secondary"
                    className="hover:bg-gray-500 hover:text-white"
                    onClick={() => handleEdit(id)}
                  >
                    <TiEdit />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {open ? (
        <>
          <div className="flex bg-[#96acac] bg-opacity-30 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3   border border-solid rounded-t-lg  border-gray-300  ">
                  <h3 className="text-3xl font-semibold ">Edit Service</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-red-500 w-8 pb-1 hover:bg-gray-400 text-xl block  rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto  container mx-auto pt-5 border  px-16 bg-opacity-100   py-5">
                  <EditServiceForm service={service} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default OurServiceList;
