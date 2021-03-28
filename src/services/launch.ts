import { gql } from '@apollo/client';
import { TLaunch } from 'types/launch';
import Client from './client';

type TParamsQuery = {
  offset: number;
  limit: number;
}

export async function getLaunches({ offset, limit }: TParamsQuery): Promise<TLaunch[]> {
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

  return launchesPast;
}
