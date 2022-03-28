import "./App.css";
import { useLazyQuery } from "@apollo/client";

import graphQlQuery from "./graphQLQuery";

import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import axios from "axios";

import Clock from "./components/Clock";
import TimeTable from "./components/TimeTable";
import InputData from "./components/InputData";
import Header from "./components/Header";

/**cards */
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function App() {
  const [entryPoint, setEntryPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");
  const [coordinates, setCoordinates] = useState({
    sourceLat: "",
    sourceLong: "",
    desLat: "",
    desLong: "",
  });

  const [search, { data, loading }] = useLazyQuery(graphQlQuery);
  useEffect(() => {
    fetchCoordinatesForPoint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entryPoint, destinationPoint]);

  if (loading) return <p>Loading....</p>;

  let url = "https://api.digitransit.fi/geocoding/v1/search";

  const fetchCoordinatesForPoint = async () => {
    let sourceAdress = await axios.get(
      url + "?text=" + entryPoint.replace(" ", "%20") + "&size=1"
    );

    console.log("sourcelat", sourceAdress);

    let destinationAdress = await axios.get(
      url + "?text=" + destinationPoint.replace(" ", "%20") + "&size=1"
    );

    const coordinates = {
      sourceLat: sourceAdress.data.features[0].geometry.coordinates[1],
      sourceLong: sourceAdress.data.features[0].geometry.coordinates[0],
      desLat: destinationAdress.data.features[0].geometry.coordinates[1],
      desLong: destinationAdress.data.features[0].geometry.coordinates[0],
    };
    setCoordinates(coordinates);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search({
      variables: {
        sourceLat: coordinates.sourceLat,
        sourceLong: coordinates.sourceLong,
        desLat: coordinates.desLat,
        desLong: coordinates.desLong,
      },
    });
  };

  return (
    <Container>
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginBottom: "20px" }}
      >
        <Grid>
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="http://www.kokoromoi.com/wp-content/uploads/2017/09/KokoroMoi_HSL_Logo-1.gif"
              alt="green iguana"
            />
            <Typography>
              <Clock />
            </Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Check Timetable Here
              </Typography>

              <InputData
                handleSubmit={handleSubmit}
                setEntryPoint={setEntryPoint}
                setDestinationPoint={setDestinationPoint}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {data && <TimeTable data={data} />}
    </Container>
  );
}

export default App;
