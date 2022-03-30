import { gql } from "@apollo/client";

const graphQlQuery = gql`
  query (
    $sourceLat: Float!
    $sourceLong: Float!
    $desLat: Float!
    $desLong: Float!
  ) {
    plan(
      from: { lat: $sourceLat, lon: $sourceLong }
      to: { lat: $desLat, lon: $desLong }
      numItineraries: 13
     
    ) {
      itineraries {
        legs {
          startTime
          endTime
          mode
          duration
          from {
            name
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
