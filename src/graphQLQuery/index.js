import { gql } from "@apollo/client";

const graphQlQuery = gql`
  query GetRoute(
    $sourceLat: Float!
    $sourceLong: Float!
    $desLat: Float!
    $desLong: Float!
  ) {
    plan(
      from: { lat: $sourceLat, lon: $sourceLong }
      to: { lat: $desLat, lon: $desLong }
      numItineraries: 3
    ) {
      itineraries {
        legs {
          startTime
          endTime
          mode
          duration
          from {
            name
            stop {
              code
              name
            }
          }
          to {
            name
          }
        }
      }
    }
  }
`;

export default graphQlQuery;
