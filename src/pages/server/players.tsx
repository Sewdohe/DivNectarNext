import * as React from "react"
import Layout from "../../components/layout";
import type { PageProps } from "gatsby"
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1"
import P from "../../components/building-blocks/Paragraph"
import { Button, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/Sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import WikiLayout from "../../components/WikiLayout";
import axios from "axios";

interface PlayerData {
  playername: string;
  uuid: string;
  totalLevels: number;
  avatarUrl: string;
}

const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [players, setPlayers] = React.useState<PlayerData[] | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const serverResponse: PlayerData[] = await axios.get("http://api.divnectar.com/players")
        // const serverResponse: PlayerData[] = await axios.get("/api/players")
        setPlayers(serverResponse)
        console.log(serverResponse)
        const playerList = serverResponse;
        setPlayers(playerList);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
    const intervalId = setInterval(fetchPlayerData, 10000);
    return () => clearInterval(intervalId);
  }, [])

  return (
    <WikiLayout>
      
    </WikiLayout>
  )
}

export const Head = () => (
  <SEO title="CraftNectar Modlist" description="All the mods available for CraftNectar" />
)

export default IndexPage