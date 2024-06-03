import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Spinner } from "@nextui-org/react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


interface ServerProps {
  uri: string
  title: string
  connectionUrl: string
  pageLink: string
}

interface ServerResponse {
  data: {
    online?: boolean
    icon?: string
    host?: string
    port?: number
    version?: {
      name_raw: string
      name_clean: string
    }
    players?: {
      online?: number
      max?: number
      list?: [{
        uuid: string
        name_raw: string
        name_clean: string
        name_html: string
        avatar: string
      }]
    }
    mods?: [{
      name: string
      version: string
    }]
    motd?: {
      html: string
    }
  }
}

interface PlayerList {
  uuid?: string
  name_raw?: string
  name_clean?: string
  name_html?: string
  avatar?: string
}

interface PAPIResponse {
  status: string,
  placeholder: string
}

export default function ServerStatus(props: ServerProps) {

  const uri = `https://api.mcstatus.io/v2/status/java/${props.uri}`
  const [players, setPlayers] = useState<PlayerList[]>([]);
  const [serverData, setServerData] = useState<ServerResponse>({
    data: {
      players: {
        online: 0
      },
      motd: {
        html: ""
      }
    }
  })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(uri)

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const serverResponse: ServerResponse = await axios.get(uri);
        setServerData(serverResponse)
        // console.log(serverResponse)
        const playerList = serverResponse.data.players?.list || [];

        // Fetch avatars for each player
        const playersWithAvatars = await Promise.all(
          playerList.map(async (player) => {
            const avatarResponse = await axios.get(`https://crafatar.com/avatars/${player.uuid}?size=100&overlay`);
            return {
              ...player,
              avatar: avatarResponse.config.url, // Get the URL from the request configuration
            };
          })
        );

        setPlayers(playersWithAvatars);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
    const intervalId = setInterval(fetchPlayerData, 60000);
    return () => clearInterval(intervalId);
    // fetchPlayerData();
  }, [])

  if (loading) return <Spinner color="secondary">Secondary</Spinner>;
  if (error) return <Spinner color="secondary">Secondary</Spinner>;

  return (
    <div className="flex">
      {serverData ? (
        <Card className="sm:w-full p-4 max-w-sm m-6">
          <a className="text-white" href={props.pageLink}>
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={serverData.data.icon}
                width={40}
              />
              <div className="flex flex-col">
                <p className="font-extrabold text-peach text-md">{props.title}</p>
                <p className="text-small text-default-500">{props.connectionUrl}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p key={uuidv4()} dangerouslySetInnerHTML={{ __html: serverData.data.motd?.html! }}></p>
            </CardBody>
            <CardBody>

              {serverData.data.players ? (
                <p><b>Players:</b> {serverData.data.players.online} / {serverData.data.players.max}</p>
              ) : (
                <p>error</p>
              )}

              <p><b>Version:</b> {serverData.data.version?.name_clean}</p>
              <p><b>Online:</b> {serverData.data.online ? <span style={{ color: 'green', fontWeight: 'bold' }}>True</span> : <span style={{ color: 'red' }}>False</span>}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <ul>
                {players.map((player) => (
                  <li className="flex flex-row justify-center align-middle" key={player.uuid}>
                    <img className="max-h-[16px] my-auto mr-1" src={player.avatar} alt={`${player.name_clean}'s avatar`} />
                    <span dangerouslySetInnerHTML={{ __html: player.name_html! }}></span>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </a>
        </Card>
      ) : (
        <p></p>
      )}
    </div>
  );

}