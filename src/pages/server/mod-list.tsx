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
import toml from 'toml';

interface TomlIndex {
  files: [{
    file: string;
    hash: string;
  }]
}

const IndexPage: React.FC<PageProps> = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [players, setPlayers] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchModList = async () => {
      try {
        const fileListResponse: any = await fetch("https://api.github.com/repos/sewdohe/CraftNectarForge/contents/mods/?ref=branch", {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        const fileListJSON = await fileListResponse.json();
        console.log(fileListJSON)
        

        // Fetch avatars for each player
        // const playersWithAvatars = await Promise.all(
        //   playerList.map(async (player) => {
        //     const avatarResponse = await axios.get(`https://crafatar.com/avatars/${player.uuid}?size=100&overlay`);
        //     return {
        //       ...player,
        //       avatar: avatarResponse.config.url, // Get the URL from the request configuration
        //     };
        //   })
        // );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

    fetchModList();
  }, [])

  return (
    <WikiLayout>
      <H1>CraftNectar Modlist</H1>
      <ul className="list-disc px-8 py-2 md:px-24 md:max-w-[50%]">
        <li>Alex's Mobs</li>
        <li>Architectury API (Fabric/Forge/NeoForge)</li>
        <li>Ars Elemental</li>
        <li>Ars Nouveau</li>
        <li>AutoRegLib</li>
        <li>Better Combat [Fabric & Forge]</li>
        <li>BetterF3</li>
        <li>Biomes O' Plenty</li>
        <li>Bookshelf</li>
        <li>CC: Tweaked</li>
        <li>Citadel</li>
        <li>Cloth Config API (Fabric/Forge/NeoForge)</li>
        <li>Collective</li>
        <li>Configured</li>
        <li>Create</li>
        <li>Creeper Overhaul</li>
        <li>Curios API (Forge/NeoForge)</li>
        <li>Embeddium (Rubidium) Extra</li>
        <li>Enigmatic Graves</li>
        <li>Farmer's Delight</li>
        <li>FerriteCore ((Neo)Forge)</li>
        <li>FramedBlocks</li>
        <li>GeckoLib</li>
        <li>Icon Xaero's</li>
        <li>Immersive Armors [Fabric/Forge]</li>
        <li>Iris & Oculus Flywheel Compat</li>
        <li>Iris/Oculus & GeckoLib Compat</li>
        <li>Jade Addons (Forge)</li>
        <li>Jade 🔍</li>
        <li>Kotlin for Forge</li>
        <li>Lightman's Currency</li>
        <li>Lightman's Discord Integration</li>
        <li>LuckPerms</li>
        <li>NBT Autocomplete</li>
        <li>No Hostiles Around Campfire</li>
        <li>Oculus</li>
        <li>Patchouli</li>
        <li>Paxi (Forge)</li>
        <li>Pehkui</li>
        <li>playerAnimator</li>
        <li>Project MMO</li>
        <li>Project MMO: Compat For Strictly Medieval</li>
        <li>Quark</li>
        <li>QuickHomes</li>
        <li>QuickSpawns</li>
        <li>QuickTeleports</li>
        <li>Regions Unexplored (forge/fabric)</li>
        <li>REI Plugin Compatibilities (REIPC)</li>
        <li>Resourceful Config</li>
        <li>Roughly Enough Items Fabric/Forge/NeoForge (REI)</li>
        <li>Rubidium</li>
        <li>Simply Swords [Fabric & Forge]</li>
        <li>Sophisticated Backpacks</li>
        <li>Sophisticated Core</li>
        <li>Stalwart Dungeons</li>
        <li>Tan's Huge Trees</li>
        <li>TerraBlender (Forge)</li>
        <li>TexTrue's Rubidium Options</li>
        <li>Tom's Simple Storage Mod</li>
        <li>When Dungeons Arise - Forge!</li>
        <li>Xaero's Minimap</li>
        <li>Xaero's World Map</li>
        <li>YUNG's API (Forge)</li>
        <li>YUNG's Better Dungeons (Forge)</li>
        <li>YUNG's Better Jungle Temples (Forge)</li>
        <li>YUNG's Better Mineshafts (Forge)</li>
        <li>YUNG's Better Nether Fortresses (Forge)</li>
        <li>YUNG's Better Strongholds (Forge)</li>
        <li>YUNG's Bridges (Forge)</li>
      </ul>
    </WikiLayout>
  )
}

export const Head = () => (
  <SEO title="CraftNectar Modlist" description="All the mods available for CraftNectar" />
)

export default IndexPage