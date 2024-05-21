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

const IndexPage: React.FC<PageProps> = () => {
    const [ menuState, setMenuState ] = React.useState(false)

    return (
        <Layout>
            {/* <button onClick={() => setMenuState(!menuState)} className="fixed bg-surface px-4 py-2 rounded-md shadow-lg border-sky border-1 hover:scale-110 transition-all right-6 top-20">Menu</button> */}
            <Button className="bg-green text-surface1 hover:scale-110" onPress={() => setMenuState(!menuState)} id="fabric-menu-button" isIconOnly color="danger" aria-label="Like">
                <FontAwesomeIcon icon={faBars} />
            </Button>    
            <div className="flex flex-row">
                <div className={`menu ${menuState ? "menu-open" : "menu-closed"}`} id="sidebar">
                    <Sidebar/>
                </div>
                <div className="" id="page-content">
                    <H1>CraftNectar Fabric Wiki</H1>
                    <P>
                        A new modpack is currently in development for the server. All current content will be deleted upon launch of the new server; save any builds you want ASAP.
                    </P>
                    <P>
                        The new modpack will attempt to obtain the following goals:
                    </P>
                    <ul className="list-disc px-8 py-2 md:px-24 md:max-w-[50%]">
                        <li>use the LevelZ mod to the fullest; almost all blocks will require points in SOME type of skill.</li>
                        <li>levelZ will be used to encourage player cohesion; we want players to rely on other players. I believe this will make the server
                            more fun, and as a side-effect, create a type of economy filled with specalists.
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => (
    <SEO title="CraftNectar Fabric" description="Learn more about the CraftNectar Fabric 1.20.1 server." />
)

export default IndexPage