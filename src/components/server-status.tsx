import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

interface ServerProps {
    uri: string
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

export default function ServerStatus(props: ServerProps) {

    const [serverData, setServerData] = useState<ServerResponse>({
        players: {},
        motd: {
            html: []
        }
    });
    const uri = `https://api.mcsrvstat.us/3/${props.uri}`
    console.log(uri)

    useEffect(() => {
        // get data from GitHub api
        fetch(uri)
            .then(response => response.json()) // parse JSON from request
            .then((resultData: ServerResponse) => {
                console.log(resultData)
                setServerData(resultData)
            }) // set data for the number of stars
    }, [])

    return (
        <div className="flex">
            {serverData ? (
                <Card className="w-[550px] p-4 max-w-sm m-6">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src={serverData.icon}
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">Server Status</p>
                            <p className="text-small text-default-500">{serverData.hostname}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>{ serverData.motd.html.map((line) => <p dangerouslySetInnerHTML={{ __html: line }}></p>) }</CardBody>
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
                </Card>
            ) : (
                <p></p>
            )}
        </div>
    );

}