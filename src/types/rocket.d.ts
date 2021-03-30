import { TMeasure } from 'types';

export type TPayloadWeights = {
  lb: number;
  name: string;
}

export type TEnginesRocket = {
  type: string;
  number: number;
}

export type TRocket = {
  id: string;
  name: string;
  stages: number;
  active: boolean;
  height: TMeasure;
  diameter: TMeasure;
  payload_weights: TPayloadWeights[];
  description: string;
  engines: TEnginesRocket;
}
