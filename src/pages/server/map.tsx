import { PageProps } from "gatsby";
import React from "react";
import WikiLayout from "../../components/WikiLayout";

const MapPage: React.FC<PageProps> = () => {

  return (
    <WikiLayout>
      <iframe className="min-h-[91vh] w-full" src="https://map.divnectar.com"></iframe>
    </WikiLayout>
  )
}

export default MapPage