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
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import PaddedContainer from "../../components/building-blocks/PaddedContainer";


const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <Layout>
      {/* <button onClick={() => setMenuState(!menuState)} className="fixed bg-surface px-4 py-2 rounded-md shadow-lg border-sky border-1 hover:scale-110 transition-all right-6 top-20">Menu</button> */}
      <Button className="bg-green text-surface1 hover:scale-110" onPress={() => setMenuState(!menuState)} id="fabric-menu-button" isIconOnly color="danger" aria-label="Like">
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <div className="flex flex-row">
        <div className={`menu ${menuState ? "menu-open" : "menu-closed"}`} id="sidebar">
          <Sidebar />
        </div>
        <div className="p-12" id="page-content">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/cn-logo.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">CraftNectar MMO (forge)</p>
                <p className="text-small text-default-500">How to connect</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="m-4">Use the link at the bottom of the card to download the modpack zip file</p>
              <p className="m-4">Open Prism launcher and click the add instance button in the upper left.</p>
              <p className="m-4">import the zip file you just downloaded, and press the okay button.</p>
              <p className="m-4">Congrats! From now on every time you launch the modpack, it will update itself thanks to a custom update script that runs prior to starting.</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="/CraftNectarMMO_DIST.zip"
              >
                Download Modpack
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Forge Connection Instructions" description="tutorial on how to connect to CraftNectar and stay updated" />
)

export default IndexPage