import React from 'react'


export default function LogoCloud() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white">Top-Tier Mods</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We run a very careful selection of content-mods on CraftNectar. Each mod has been carefully considered so that it fits in 
                with the rest of the pack, and the levelZ leveling system.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Join Instructions
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-0">
              <img
                className="max-h-12 w-full object-contain object-center"
                src="/mod-logos/botania.png"
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="/mod-logos/create.png"
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="/mod-logos/farmersdelight.png"
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-center"
                src="/mod-logos/better-combat.png"
                alt="Laravel"
                width={136}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }