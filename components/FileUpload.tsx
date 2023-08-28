"use client";
import React from "react";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";
type Props = {
  setData: any;
  value: string;
  data: any;
  endpoint: "messageFile" | "serverImage";
};

function FileUpload({ setData, value, endpoint, data }: Props) {
  const fileType = value.split(".").pop();

  if (value !== "" && fileType !== "pdf") {
    return (
      <div className="relative w-20 h-20 mx-auto">
        <Image fill src={value} alt="Image" className="rounded-full" />
        <button
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X
            className="h-4 w-4"
            onClick={() => setData({ ...data, imageUrl: "" })}
          />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        setData({ ...data, imageUrl: res?.[0].url });
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}

export default FileUpload;
