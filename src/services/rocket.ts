import { gql } from '@apollo/client';
import { TRocket } from 'types/rocket';
import Client from './client';

type TParamsQuery = {
  offset: number;
  limit: number;
}

export async function getRockets({ offset, limit }: TParamsQuery): Promise<TRocket[]> {
  const { data: { rockets } } = await Client.query({
    query: gql`
      query GetLaunches {
        rockets(limit: ${limit}, offset: ${offset}) {
          id
          name
          stages
          active
          height {
            feet
          }
          diameter {
            feet
          }
          payload_weights {
            lb
            name
          }
          description
          engines {
            type
            number
          }
        }
      }
    `,
  });

  return rockets;
}
