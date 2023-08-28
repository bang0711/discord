"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import FileUpload from "../FileUpload";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
type Props = {};

function InitialModel({}: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <Loading />;
  }
  const createServer = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/servers", data);
      setData({ imageUrl: "", name: "" });
      router.refresh();
      window.location.reload();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      toast.success("Server created");
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.form
        onSubmit={createServer}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-3 sm:rounded-lg w-full sm:w-[80%] md:w-[70%] lg:w-[50%] space-y-3"
      >
        <h1 className="text-3xl text-center font-bold text-black">
          Customize your server
        </h1>
        <p className="text-center text-xs md:text-sm font-medium text-zinc-500">
          Give your server a personality with a name and an image, you can
          change it later.
        </p>

        <FileUpload
          data={data}
          endpoint="serverImage"
          value={data.imageUrl}
          setData={setData}
        />

        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
          >
            server name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="bg-zinc-300/50 p-2 w-full rounded-lg text-black outline-none"
            placeholder="Enter server name"
          />
        </div>

        <Button
          variant={"primary"}
          disabled={isLoading || !data.name || !data.imageUrl}
          className="w-full transition-all duration-300"
        >
          Create
        </Button>
      </motion.form>
    </div>
  );
}

export default InitialModel;
