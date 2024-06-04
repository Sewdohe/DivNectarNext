import * as React from "react"
import Layout from "../../components/layout";
import type { PageProps } from "gatsby"
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1"
import P from "../../components/building-blocks/Paragraph"
import Sidebar from "../../components/Sidebar"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Button, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import PaddedContainer from "../../components/building-blocks/PaddedContainer";
import { ArrowPathIcon, CloudArrowUpIcon, Cog6ToothIcon, FingerPrintIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/24/outline";


const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <Layout>
      <Tooltip placement="left" className="bg-surface text-textPrimary" content="Open Sidebar">
        <Button className="bg-green text-surface1 hover:scale-110" onPress={() => setMenuState(!menuState)} id="fabric-menu-button" isIconOnly color="danger" aria-label="Like">
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </Tooltip>
      <div className={`menu ${menuState ? "menu-open" : "menu-closed"}`} id="sidebar">
        <Sidebar />
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Connecting Is Easy!</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              All you need to do is download Prism Launcher and import our modpack. Simple as that!
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <video
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              autoPlay={true}
              muted
              loop
              width={2432}
              height={1442}
              src="/craftnectar-install.mp4"
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Forge Connection Instructions" description="tutorial on how to connect to CraftNectar and stay updated" />
)

export default IndexPage