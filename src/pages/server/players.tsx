import React, { useState, useEffect } from "react";
import type { PageProps } from "gatsby";
import SEO from "../../components/Seo";
import { Spinner, Progress } from "@nextui-org/react";
import WikiLayout from "../../components/WikiLayout";
import axios, { all, AxiosResponse } from "axios";

interface OfflinePlayer {
  balance: number;
  uuid: string;
  name: string;
  whitelisted: boolean;
  banned: boolean;
  op: boolean;
  lastPlayed: number;
}

export interface OnlinePlayer {
  uuid: string;
  displayName: string;
  address: string;
  advLevel: number;
  port: number;
  exhaustion: number;
  exp: number;
  whitelisted: boolean;
  banned: boolean;
  op: boolean;
  balance: number;
  location: number[];
  dimension: string;
  health: number;
  rank?: string;
  maxHealth?: number;
  hunger: number;
  alonsoLevel?: number;
  saturation: number;
  gamemode: string;
  lastPlayed: number;
}

const IndexPage: React.FC<PageProps> = () => {
  const [onlinePlayers, setOnlinePlayers] = useState<OnlinePlayer[] | null>(
    null
  );
  const [allPlayers, setAllPlayers] = useState<OfflinePlayer[] | null>(null);
  const [viewAll, setViewAll] = useState<boolean>(false);

  const getOnlinePlayers = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.divnectar.com/v1/players",
      headers: {
        key: `${process.env.API_ACCESS_KEY}`,
      },
    };
    let res: AxiosResponse<OnlinePlayer[]> = await axios.request(config);
    console.log(res.data);

    const playersWithData = await Promise.all(
      res.data!.map(async (player: OnlinePlayer) => {
        const powerLevelResponse = await getPlaceholder(
          player.uuid,
          "%auraskills_power%"
        ); // Replace with your API endpoint
        const powerLevel = await powerLevelResponse;

        const advLevelResponse = await getPlaceholder(
          player.uuid,
          "%alonsolevels_level%"
        ); // Replace with your API endpoint
        const advLevel = await advLevelResponse;

        const maxHealthResponse = await getPlaceholder(
          player.uuid,
          "%player_max_health%"
        ); // Replace with your API endpoint
        const maxHealth = await maxHealthResponse;

        // Combine the original player data with the additional data
        return {
          ...player,
          alonsoLevel: powerLevel,
          advLevel: advLevel,
          maxHealth: maxHealth,
        };
      })
    );
    setOnlinePlayers(playersWithData);
  };

  const getAllPlayers = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.divnectar.com/v1/players/all",
      headers: {
        key: `${process.env.API_ACCESS_KEY}`,
      },
    };
    let res: AxiosResponse<OfflinePlayer[]> = await axios.request(config);
    console.log(res.data);
    setAllPlayers(res.data);
  };

  const getPlaceholder = async (uuid: string, placeholder: string) => {
    let data = new FormData();
    data.append("uuid", uuid);
    data.append("message", placeholder);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.divnectar.com/v1/placeholders/replace",
      headers: {
        key: `${process.env.API_ACCESS_KEY}`,
      },
      data: data,
    };

    let result = await axios.request(config);
    console.log(`${uuid} power level is ${result.data}`);
    return result.data;
  };

  const openChatHook = async () => {
    let ws = new WebSocket("ws://api.divnectar.com/webhook");
    ws.onopen = () => console.log("connected to websocket");
    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      console.log(message);
    };
  };

  const toggleView = () => {
    setViewAll(!viewAll);
  };

  useEffect(() => {
    getOnlinePlayers();
    getAllPlayers();

    openChatHook();
  }, []);

  useEffect(() => {}, [onlinePlayers]);

  if (onlinePlayers && allPlayers)
    return (
      <WikiLayout>
        <h2 className="text-2xl md:text-6xl text-center font-extrabold">
          {viewAll ? <span>All</span> : <span>Online</span>} Players
        </h2>
        <div className="flex justify-center">
          <button className="margin-auto" onClick={() => toggleView()}>
            {viewAll ? (
              <span>Switch to Online</span>
            ) : (
              <span>Switch to All Players</span>
            )}
          </button>
        </div>
        <div
          role="list"
          className="grid m-6 pb-10 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {viewAll ? (
            <div>
              {allPlayers.map((player: OfflinePlayer) => (
                <div
                  key={player.uuid}
                  className="col-span-1 flex flex-col m-4 divide-y divide-gray-200 rounded-lg bg-navBG text-center shadow"
                >
                  <div className="flex flex-1 flex-col p-8">
                    <img
                      className="mx-auto h-auto w-32 flex-shrink-0 shadow-lg"
                      src={`https://mc-heads.net/body/${player.uuid}.png`}
                      alt=""
                    />
                    <h3 className="mt-6 text-sm font-lg font-extrabold text-textPrimary">
                      {player.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {onlinePlayers.map((player, index) => (
                <div
                  key={player.uuid}
                  className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-navBG text-center shadow"
                >
                  <div className="flex flex-1 flex-col p-8">
                    <img
                      className="mx-auto h-auto w-32 flex-shrink-0 shadow-lg"
                      src={`https://mc-heads.net/body/${player.uuid}.png`}
                      alt=""
                    />
                    <Progress
                      label="Health"
                      size="sm"
                      value={player.health}
                      maxValue={player.maxHealth}
                      color="secondary"
                      showValueLabel={true}
                      className="max-w-md"
                    />
                    <h3 className="mt-6 text-sm font-lg font-extrabold text-textPrimary">
                      {player.displayName}
                    </h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                      <dd className="text-sm text-subText">
                        <b>Power Level:</b> {player.alonsoLevel}
                      </dd>
                      <dd className="text-sm text-subText">
                        <b>Server Level:</b> {player.advLevel}
                      </dd>
                      <dd className="mt-3">
                        {/* <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      #{index + 1}
                    </span> */}
                      </dd>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </WikiLayout>
    );

  return <Spinner>Loading</Spinner>;
};

export const Head = () => (
  <SEO
    title="CraftNectar Player Glossary"
    description="View stats of online players in real-time"
  />
);

export default IndexPage;
