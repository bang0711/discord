import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function ServerPage({ params: { id } }: Props) {
  return <div>{id}</div>;
}

export default ServerPage;
