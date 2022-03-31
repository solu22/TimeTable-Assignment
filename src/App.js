/*Axios,Grpahql */
import axios from "axios";
import { useLazyQuery } from "@apollo/client";
import graphQlQuery from "./graphQLQuery";

/* Material-UI Import */
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import getLocation from "./components/getLocation";
import { Container, Typography } from "@mui/material";

/*React, Redux Import */

import { useState, useEffect } from "react";
import { url } from "./api";
import Clock from "./components/Clock";
import TimeTable from "./components/TimeTable";
import InputData from "./components/InputData";
import Header from "./components/Header";

//import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
  const [entryPoint, setEntryPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");
  const [searchDataFrom, setSearchDataFrom] = useState([]);
  const [searchDataTo, setSearchDataTo] = useState([]);
  const [coordinatesFromLat, setCoordinatesFromLat] = useState(null);
  const [coordinatesToLat, setCoordinatesToLat] = useState(null);
  const [coordinatesFromLong, setCoordinatesFromLong] = useState(null);
  const [coordinatesToLong, setCoordinatesToLong] = useState(null);
  const [search, { loading, data }] = useLazyQuery(graphQlQuery);
  console.log("checkdata", data);

  let searchUrl = url;

  const getData = async () => {
    const source = await axios.get(`${searchUrl}?text=${entryPoint}`);
    setSearchDataFrom(source.data.features);

    const destination = await axios.get(`${searchUrl}?text=${destinationPoint}`);
    setSearchDataTo(destination.data.features);

  };

  useEffect(() => {
    getData();
  }, [entryPoint, destinationPoint]);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    search({
      variables: {
        sourceLat: coordinatesFromLat,
        sourceLong: coordinatesFromLong,
        desLat: coordinatesToLat,
        desLong: coordinatesToLong,
      },
    });
  };

  {
    loading && <Loader />;
  }

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
              src="https://play-lh.googleusercontent.com/QmH_nu4O7uIgmUH-ki8EYBtx77aajbDphFrUiR69r4tBZ2bSticY7F4HNI735z1_7bI"
              alt="hsl-card-image"
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
                searchDataFrom={searchDataFrom}
                searchDataTo={searchDataTo}
                setCoordinatesFromLat={setCoordinatesFromLat}
                setCoordinatesFromLong={setCoordinatesFromLong}
                setCoordinatesToLat={setCoordinatesToLat}
                setCoordinatesToLong={setCoordinatesToLong}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {data && (
        <TimeTable
          data={data}
          entryPoint={entryPoint}
          destinationPoint={destinationPoint}
        />
      )}
    </Container>
  );
}

export default App;
