import * as React from "react"
import Layout from "../../components/layout";
import type { PageProps } from "gatsby"
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1"
import P from "../../components/building-blocks/Paragraph"
import Sidebar from "../../components/Sidebar"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ServerStatus from "../../components/ServerStatus";
import WikiLayout from "../../components/WikiLayout";

const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <WikiLayout>
        <div className="" id="page-content">
          <H1>CraftNectarMMO</H1>
          <P>
            A new modpack is currently in development for the server. All current content will be deleted upon launch of the new server; save any builds you want ASAP.
          </P>
          <P>
            The new modpack will attempt to obtain the following goals:
          </P>
          <ul className="list-disc px-8 py-2 md:px-24 md:max-w-[50%]">
            <li>Provide the player with a clean and balanced MMO system featuring multiple content mods.</li>
          </ul>
        </div>
        <div>
          <ServerStatus pageLink="/server/wiki" title="CraftNectar MMO" connectionUrl="craftnectar.divnectar.com" uri="craft.divnectar.com" />
        </div>
    </WikiLayout>
  )
}

export const Head = () => (
  <SEO title="CraftNectar Forge MMO" description="Learn more about the CraftNectar Forge 1.19.2 server." />
)

export default IndexPage