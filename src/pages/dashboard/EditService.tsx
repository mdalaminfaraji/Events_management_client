import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

interface ServiceFormProps {
  service: {
    id: string;
    title: string;
    description: string;
    features: string[];
    servicesImage: File | null;
  };
}

const EditServiceForm: React.FC<ServiceFormProps> = ({ service }) => {
  const [title, setTitle] = useState<string>(service ? service.title : "");
  const [description, setDescription] = useState<string>(
    service ? service.description : ""
  );
  const [features, setFeatures] = useState<string[]>(service.features);
  const [featureInput, setFeatureInput] = useState<string>("");
  const [servicesImage, setServicesImage] = useState<File | null>(
    service ? service.servicesImage : null
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: FormData) => {
      return axios.put(
        `https://events-management-nsnv.onrender.com/api/services/${parseInt(
          service.id
        )}/`,
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
        title: "Service Updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Service updated:", response.data);
      queryClient.invalidateQueries({ queryKey: ["services"] });
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

  const handleFeatureInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeatureInput(e.target.value);
  };

  const handleAddFeature = () => {
    if (featureInput.trim() !== "") {
      setFeatures([...features, featureInput.trim()]);
      setFeatureInput("");
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("features", JSON.stringify(features));
    if (servicesImage) {
      formData.append("servicesImage", servicesImage);
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
        <label>Description:</label>
        <textarea
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Features:</label>
        <ul>
          {features?.map((feature, index) => (
            <li key={index}>
              {feature}
              <Button
                type="button"
                className="text-red-500"
                variant="ghost"
                onClick={() => handleRemoveFeature(index)}
              >
                <FaRegTrashAlt />
              </Button>
            </li>
          ))}
        </ul>
        <div>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            value={featureInput}
            onChange={handleFeatureInputChange}
            placeholder="Add feature"
          />
          <div className="text-right mt-3">
            <Button variant="outline" type="button" onClick={handleAddFeature}>
              Add Feature
            </Button>
          </div>
        </div>
      </div>
      <div>
        <label>Services Image:</label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setServicesImage(e.target.files ? e.target.files[0] : null)
          }
        />
      </div>
      <div className="text-right mt-3">
        <Button type="submit" className="text-sm">
          Update Service
        </Button>
      </div>
    </form>
  );
};

export default EditServiceForm;
