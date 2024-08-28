import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1";
import WikiLayout from "../../components/WikiLayout";
import axios, { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface PluginInfo {
  name: string;
  enabled: boolean;
  version: string;
  website?: string;
  authors: string[];
  depends: string[];
  softDepends: string[];
  apiVersion: string;
  description?: string;
}

const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [pluginList, setPluginList] = React.useState<any | null>(null);

  React.useEffect(() => {
    const fetchModList = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.divnectar.com/v1/plugins",
        headers: {
          key: `${process.env.API_ACCESS_KEY}`,
        },
      };

      let res: AxiosResponse<PluginInfo[]> = await axios.request(config);
      setPluginList(res.data);
    };

    fetchModList();
  }, []);

  if (pluginList) {
    return (
      <WikiLayout>
        <H1>CraftNectar Plugins</H1>
        <table className="table-auto overflow-scroll p-0 m-0 border-separate rounded-md border-1 border-tools-table-outline w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
              <th>Link</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody className="p-2">
          {pluginList!.map((plugin: PluginInfo) => (
            <tr key={plugin.name} className="odd:bg-slate-500">
              <td className="px-2">
              {plugin.name}
              </td>
              <td className="px-2">
                {plugin.version}
              </td>
              <td className="px-2 m-1">
                <a href={plugin.website}><FontAwesomeIcon icon={faCircleInfo} /></a>
              </td>
              <td className="px-2">
                {plugin.authors[0]}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </WikiLayout>
    );
  }
};

export const Head = () => (
  <SEO
    title="CraftNectar Modlist"
    description="All the plugins installed on CraftNectar"
  />
);

export default IndexPage;
