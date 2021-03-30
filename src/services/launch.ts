import { gql } from '@apollo/client';
import { TLaunch } from 'types/launch';
import { TParamsQuery } from 'types';
import Client from './client';

export async function getLaunches({ offset, limit }: TParamsQuery): Promise<TLaunch[]> {
  let result: any[] = [];

  if (offset === 0) {
    let launchesLocal: any = localStorage.getItem('@client/launches');
    launchesLocal = launchesLocal ? JSON.parse(launchesLocal) : [];
    result = [...launchesLocal];
  }

  const { data: { launchesPast } } = await Client.query({
    query: gql`
      query GetLaunches {
        launchesPast(sort: "launch_date_utc", limit: ${limit}, offset: ${offset}, order: "DESC") {
          id
          launch_date_utc
          mission_name
          details
          rocket {
            rocket_name
            rocket_type
          }
          launch_site {
            site_name
            site_name_long
          }
          ships {
            name
            image
            type
          }
        }
      }
    `,
  });

  result = [...result, ...launchesPast];

  return result;
}

type TLaunchPost = {
  mission_name: string;
  launch_date: string;
  details: string;
  rocket: {
    name: string;
    type: string;
  },
  launch_site: {
    name: string,
  },
  ships: []
}

export function saveLaunches({
  mission_name,
  launch_date,
  details,
  rocket,
  launch_site,
  ships,
}: TLaunchPost) {
  const data = {
    id: 'NEW LAUNCH',
    launch_date_utc: launch_date,
    mission_name,
    details,
    rocket: {
      rocket_name: rocket?.name,
      rocket_type: rocket?.type,
    },
    launch_site: {
      site_name_long: launch_site?.name,
    },
    ships,
  };

  let launchesLocal: any = localStorage.getItem('@client/launches');
  launchesLocal = launchesLocal && JSON.parse(launchesLocal);

  if (!Array.isArray(launchesLocal)) launchesLocal = [];
  launchesLocal = [data, ...launchesLocal];

  localStorage.setItem('@client/launches', JSON.stringify(launchesLocal));

  return launchesLocal;
}

export async function getRockets() {
  const { data: { rockets } } = await Client.query({
    query: gql`
      query GetLaunches {
        rockets {
          name
          type
        }
      }
    `,
  });

  return rockets;
}

export async function getLaunchPads() {
  const { data: { launchpads } } = await Client.query({
    query: gql`
      query GetLaunches {
        launchpads {
          name
        }
      }
    `,
  });

  return launchpads;
}

export async function getShips() {
  const { data: { ships } } = await Client.query({
    query: gql`
      query GetLaunches {
        ships {
          name
          image
          type
        }
      }
    `,
  });

  return ships;
}
