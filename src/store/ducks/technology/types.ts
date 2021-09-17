/**
 * Action types
 */

export enum TechnologyTypes {
  TECHNOLOGY_REQUEST = "@technology/TECHNOLOGY_REQUEST",
  TECHNOLOGY_SUCCESS = "@technology/TECHNOLOGY_SUCCESS",
  TECHNOLOGY_FAILURE = "@technology/TECHNOLOGY_FAILURE",
}

/**
 * Data types
 */

export interface Technology {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: Result[];
}

export interface Result {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  multimedia: [
    {
      url: string;
      format: string;
      height: number;
      width: number;
      type: string;
      subtype: string;
      caption: string;
      copyright: string;
    }
  ];
  short_url: string;
}

/**
 * State type
 */

export interface TechnologyState {
  readonly data: Technology;
  readonly loading: boolean;
  readonly error: boolean;
}
