import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { v4 as uuidv4 } from 'uuid';

interface ServerProps {
  uri: string
  title: string
  connectionUrl: string
  pageLink: string
}

interface ServerResponse {
  online?: boolean
  icon?: string
  hostname?: string
  players: {
    online?: number
    max?: number
  }
  motd: {
    html: string[]
  }
  version?: number
}

interface PAPIResponse {
  status: string,
  placeholder: string
}

export default function ServerStatus(props: ServerProps) {

  // Prepare request for PAPI API
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer testingthis");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*")
  const raw = JSON.stringify({
    "placeholder": "%server_uptime%",
    "player": false
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const [serverData, setServerData] = useState<ServerResponse>({
    players: {},
    motd: {
      html: []
    }
  });
  const uri = `https://api.mcsrvstat.us/3/${props.uri}`
  const papi_uri = '/api/placeholder'

  console.log(uri)

  useEffect(() => {
    // get data from GitHub api
    fetch(uri)
      .then(response => response.json()) // parse JSON from request
      .then((resultData: ServerResponse) => {
        console.log(resultData)
        setServerData(resultData)
      });

    // minecraft API broken for now...just be happy with the data
    // we have I guess.
    // fetch(papi_uri, { method: "POST", headers: myHeaders })
    //   .then(response => response.json())
    //   .then((data: any) => {
    //     console.log(data)
    //   });
  }, [])

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
                src={serverData.icon}
                width={40}
              />
              <div className="flex flex-col">
                <p className="font-extrabold text-peach text-md">{props.title}</p>
                <p className="text-small text-default-500">{props.connectionUrl}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              {serverData.motd.html.map((line) => <p key={uuidv4()} dangerouslySetInnerHTML={{ __html: line }}></p>)}
            </CardBody>
            <CardBody>

              {serverData.players ? (
                <p><b>Players:</b> {serverData.players.online} / {serverData.players.max}</p>
              ) : (
                <p>error</p>
              )}

              <p><b>Version:</b> {serverData.version}</p>
              <p><b>Online:</b> {serverData.online ? <span style={{ color: 'green', fontWeight: 'bold' }}>True</span> : <span style={{ color: 'red' }}>False</span>}</p>
            </CardBody>
            <Divider />
            <CardFooter>

            </CardFooter>
          </a>
        </Card>
      ) : (
        <p></p>
      )}
    </div>
  );

}