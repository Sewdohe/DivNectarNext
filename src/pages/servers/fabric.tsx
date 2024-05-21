import * as React from "react"
import Layout from "../../components/layout";
import type { PageProps } from "gatsby"
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1"
import P from "../../components/building-blocks/Paragraph"
import Sidebar from "../../components/Sidebar"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className="flex flex-row">
                <div className="" id="sidebar">
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
                    <ul className="list-disc px-3 py-2 md:px-24 md:max-w-[50%]">
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