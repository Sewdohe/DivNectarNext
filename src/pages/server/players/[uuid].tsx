import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import axios, { all, AxiosResponse } from "axios";
import { Spinner, Progress } from "@nextui-org/react";
import WikiLayout from "../../../components/WikiLayout";

export interface OnlinePlayer {
  uuid: string;
  displayName: string;
  address: string;
  skillLevel: number;
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
  firstJoin: string;
  aliveTime?: number;
}

const PlayersPage: React.FC<PageProps> = (props) => {
  const uuid = props.params.uuid;
  const [player, setPlayer] = useState<OnlinePlayer | null>(null);

  const getPlayerInfo = async (uuid: string) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.divnectar.com/v1/players/${uuid}`,
      headers: {
        key: `${process.env.API_ACCESS_KEY}`,
      },
    };
    let res: AxiosResponse<OnlinePlayer> = await axios.request(config);
    let player = res.data;

    player.skillLevel = await getPlaceholder(uuid, "%auraskills_power%");
    player.alonsoLevel = await getPlaceholder(uuid, "%alonsolevels_level%");
    player.maxHealth = await getPlaceholder(uuid, "%player_max_health%");
    player.firstJoin = await getPlaceholder(uuid, "%player_first_join_date%");
    player.aliveTime = await getPlaceholder(uuid, "%player_minutes_lived%");

    setPlayer(player);
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
    return result.data;
  };

  useEffect(() => {
    getPlayerInfo(uuid)
  }, [])

  return (
    <WikiLayout>
      {player ? (
        <div>
          <h2 className="px-4 text-4xl font-extrabold">{player.displayName}'s Profile</h2>
          <div
            key={player.uuid}
            className="flex flex-col m-4 rounded-lg bg-navBG text-center shadow w-full md:max-w-[25vw] self-center"
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
                  <b>Skill Level:</b> {player.skillLevel}
                </dd>
                <dd className="text-sm text-subText">
                  <b>Server Level:</b> {player.alonsoLevel}
                </dd>
                <dd className="mt-3"></dd>
              </dl>
              <dd>
                <b>Player since:</b> {player.firstJoin}
              </dd>
              <dd>
                <b>Alive for:</b> {player.aliveTime! / 60} hours
              </dd>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Player Data...</div>
      )}
    </WikiLayout>
  );
};

export default PlayersPage;
