import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

interface ServiceFormProps {}

const EventItemForm: React.FC<ServiceFormProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (formData: FormData) => {
      return axios.post(
        "https://events-management-nsnv.onrender.com/api/eventItem/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: (response) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Event Added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Service added:", response.data);

      setTitle("");

      setImage(null);
      const inputFile = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (inputFile) {
        inputFile.value = "";
      }
      queryClient.invalidateQueries({ queryKey: ["events_item"] });
    },
    onError: () => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An Error occurred",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);

    if (image) {
      formData.append("image", image);
    }
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Event Image</label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        />
      </div>
      <div className="text-center">
        <Button
          className="text-sm w-full rounded-md mt-3 text-white"
          type="submit"
        >
          Add EventItem
        </Button>
      </div>
    </form>
  );
};

export default EventItemForm;
