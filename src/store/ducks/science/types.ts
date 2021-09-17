/**
 * Action types
 */

export enum ScienceTypes {
  SCIENCE_REQUEST = "@science/SCIENCE_REQUEST",
  SCIENCE_SUCCESS = "@science/SCIENCE_SUCCESS",
  SCIENCE_FAILURE = "@science/SCIENCE_FAILURE",
}

/**
 * Data types
 */

export interface Science {
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

export interface ScienceState {
  readonly data: Science;
  readonly loading: boolean;
  readonly error: boolean;
}
