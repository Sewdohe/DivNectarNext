import * as React from "react"
import Layout from "../../components/layout";
import type { PageProps } from "gatsby"
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1"
import P from "../../components/building-blocks/Paragraph"
import { Button, Spinner, Tooltip, Progress } from "@nextui-org/react";
import WikiLayout from "../../components/WikiLayout";
import axios from "axios";

interface PapiResponse {
  status: boolean,
  placeholder: string
}


const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [players, setPlayers] = React.useState<String | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const serverResponse: PapiResponse = await axios({
          method: 'post',
          url: 'https://api.divnectar.com/api/placeholder',
          data: '%playerlist_all_list%',
          headers: {
            'Authorization': 'testingthis',
            'Access-Control-Allow-Origin': 'https://divnectar.com'
          }
        })
        console.log(serverResponse)
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

  if (players) return (
    <WikiLayout>
     
    </WikiLayout>
  )

  return (
    <Spinner>Loading</Spinner>
  )

}

export const Head = () => (
  <SEO title="CraftNectar Player Glossary" description="View stats of online players in real-time" />
)

export default IndexPage