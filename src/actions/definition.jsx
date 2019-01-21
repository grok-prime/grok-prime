import { fetch_definition } from "actions/types";

export const fetchDefinitions => dispatch = term => {
  // get definition from db
  dispatch({ type: fetch_definition, term });
}
