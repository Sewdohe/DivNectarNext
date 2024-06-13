import * as React from "react"
import Layout from "../../components/layout";
import type { PageProps } from "gatsby"
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1"
import P from "../../components/building-blocks/Paragraph"
import { Button, Spinner, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/Sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import WikiLayout from "../../components/WikiLayout";
import axios from "axios";
import toml from 'toml';

interface TomlIndex {
  files: [{
    file: string;
    hash: string;
  }]
}

interface ModListItem {
  name: string;
  side: string;
}

const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [modList, setModList] = React.useState<ModListItem[] | null>([]);
  var tempList: ModListItem[] = [];
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    const fetchModList = async () => {
      try {
        const fileListResponse: any = await fetch("https://api.github.com/repos/sewdohe/CraftNectarForge/contents/mods/?ref=branch", {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        const fileListJSON = await fileListResponse.json();

        fileListJSON.forEach(async (file: any) => {
          console.log(file)
          const fileContentResponse: any = await fetch(file.download_url)
          const tomlContent = await fileContentResponse.text();
          const fileTOML = toml.parse(tomlContent);
          tempList = [];

          tempList?.push({
            name: fileTOML.name,
            side: fileTOML.side
          })
        });

        console.log('setting temp list')
        setModList(tempList);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

    fetchModList();
  }, [])

  if(loading) return <Spinner color="secondary" size="lg" />

  return (
    <WikiLayout>
      <H1>CraftNectar Modlist</H1>
      <ul className="list-disc px-8 py-2 md:px-24 md:max-w-[50%]">
        {modList?.map((mod, index) => (
          <li key={index} className="">{mod.name} - {mod.side}</li>
        ))}
      </ul>
    </WikiLayout>
  )
}

export const Head = () => (
  <SEO title="CraftNectar Modlist" description="All the mods available for CraftNectar" />
)

export default IndexPage