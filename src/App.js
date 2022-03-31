/*Axios,Grpahql */
import axios from "axios";
import { useLazyQuery } from "@apollo/client";
import graphQlQuery from "./graphQLQuery";

/* Material-UI Import */
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import getLocation from "./components/getLocation";
import { Container, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";


/*React, Redux Import */
import { useEffect, useState } from "react";
import { url } from "./api";
import Clock from "./components/Clock";
import TimeTable from "./components/TimeTable";
import InputData from "./components/InputData";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
  const [entryPoint, setEntryPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");
  const [search, { data, loading, error}] = useLazyQuery(graphQlQuery);

  const [coordinates, setCoordinates] = useState({
    sourceLat: "",
    sourceLong: "",
    desLat: "",
    desLong: "",
  });

  const { currentLattitude, currentLongitude } = useSelector(
    (state) => state.dataReducer
  );

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    fetchCoordinatesForPoint();
  }, [entryPoint, destinationPoint]);

 


  let searchUrl = url;

  const fetchCoordinatesForPoint = async () => {
    let sourceAdress = await axios.get(
      searchUrl + "?text=" + entryPoint.replace(" ", "%20") + "&size=1"
    );

    let destinationAdress = await axios.get(
      searchUrl + "?text=" + destinationPoint.replace(" ", "%20") + "&size=1"
    );

    const coordinates = {
      sourceLat:
        sourceAdress.data.features[0].geometry.coordinates[1] ||
        currentLattitude,
      sourceLong:
        sourceAdress.data.features[0].geometry.coordinates[0] ||
        currentLongitude,
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

  if(loading){
    return <Loader />;
  }

  if(entryPoint.includes("aaa") && destinationPoint.includes("aaa")){
    return (
      <Alert severity="error" style={{ textAlign: "center" }}>
        <p style={{ fontStyle: "normal", fontWeight: "bolder" }}>
          This is an API error test
        </p>
        <Button href="/" variant="contained">
          Back To Home
        </Button>
      </Alert>
    );
  }

  if(error){
    return (
      <Alert severity="error" style={{ textAlign: "center" }}>
        <p style={{ fontStyle: "normal", fontWeight: "bolder" }}>
          {error.message}
        </p>
        <Button href="/" variant="contained">
          Back To Home
        </Button>
      </Alert>
    );
  }

  if (data && data.plan.itineraries.length == 0){
    return (
      <Alert severity="error" style= {{textAlign:"center"}}>
        <p style= {{fontStyle:"normal", fontWeight:"bolder"}}>No Route Found for given address</p>
        <Button href="/" variant="contained">
          Back To Home
        </Button>
      </Alert>
    );
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
                entryPoint={entryPoint}
                destinationPoint={destinationPoint}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {data && data.plan.itineraries.length !== 0 && (
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
