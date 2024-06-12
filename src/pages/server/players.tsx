import * as React from "react"
import Layout from "../../components/layout";
import type { PageProps } from "gatsby"
import SEO from "../../components/Seo";
import H1 from "../../components/building-blocks/H1"
import P from "../../components/building-blocks/Paragraph"
import { Button, Spinner, Tooltip, Progress } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/Sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import WikiLayout from "../../components/WikiLayout";
import axios from "axios";

interface PlayerData {
  data: [
    {
      playerName: string;
      uuid: string;
      totalLevels: number;
      avatarUrl: string;
      health: number;
      maxHealth: number;
      skills: {
        skills: {
          name: string;
        }
      }
    }
  ]
}

const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [players, setPlayers] = React.useState<PlayerData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const serverResponse: PlayerData = await axios.get("https://api.divnectar.com/players")
        // const serverResponse: PlayerData[] = await axios.get("/api/players")
        setPlayers(serverResponse)
        console.log(serverResponse)
        const playerList = serverResponse;
        playerList.data.sort((a, b) => b.totalLevels - a.totalLevels)
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

  if (players) return (
    <WikiLayout>
      <ul role="list" className="grid m-6 pb-10 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {players!.data.map((player, index) => (
          <li key={player.uuid} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-navBG text-center shadow">
            <div className="flex flex-1 flex-col p-8">
              <img className="mx-auto h-32 w-32 flex-shrink-0 shadow-lg" src={player.avatarUrl} alt="" />
              <Progress
                label="Health"
                size="sm"
                value={player.health}
                maxValue={player.maxHealth}
                color="secondary"
                showValueLabel={true}
                className="max-w-md"
              />
              <h3 className="mt-6 text-sm font-lg font-extrabold text-textPrimary">{player.playerName}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dd className="text-sm text-subText">{player.totalLevels} Levels Total</dd>
                <dt className="sr-only">Rank</dt>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    #{index + 1}
                  </span>
                </dd>
              </dl>
            </div>
            <ul className="m-4 p-2">
              {Object.keys(player.skills.skills).map((keyName, keyIndex) => (
                <li className="flex justify-center items-center">
                  <span className="text-textPrimary text-xs">{keyName} </span>
                  <span className="w-full"></span>
                  {/* @ts-ignore */}
                  <span className="text-xs">{player.skills.skills[keyName]}</span>
                </li>
              ))}
            </ul>
            {/* <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </div> */}
          </li>
        ))}
      </ul>
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