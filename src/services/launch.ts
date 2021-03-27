import { gql } from '@apollo/client';
import { TCardLaunch } from 'components/CardLaunch/types';
import Client from './client';

type TParamsQuery = {
  offset: number;
  limit: number;
}

export async function getLaunches({ offset, limit }: TParamsQuery): Promise<TCardLaunch[]> {
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
        }
      }
    `,
  });

  return launchesPast;
}
