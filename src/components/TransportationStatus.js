import React from 'react';


import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
const TransportationStatus = ({mode, to, from, duration}) => {
  return (
    <>
      {/* {mode === "WALK" && to !== "Destination" && (
        <Card
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            marginLeft: "60%",
            width: "100%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {`Walk from your current location to ${to} station for ${
                Math.ceil(duration / 60) + " min."
              }`}
            </Typography>
          </CardContent>
        </Card>
      )} */}

      {/* {mode === "WALK" && to === "Destination" && (
        <Card
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            marginLeft: "60%",
            width: "100%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {`Walk from ${from} stop for ${
                Math.ceil(duration / 60) + " min"
              } to your destination address.`}
            </Typography>
          </CardContent>
        </Card>
      )} */}

      {mode === "SUBWAY" && (
        <Card
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            marginLeft: "60%",
            width: "100%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {`Journey from ${from} station to ${to} stop is ${
                Math.ceil(duration / 60) + " min"
              } with Subway.`}
            </Typography>
          </CardContent>
        </Card>
      )}

      {mode === "BUS" && (
        <Card
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            marginLeft: "60%",
            width: "100%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {`Journey from ${from} station to ${to} stop is ${
                Math.ceil(duration / 60) + " min"
              } with Bus.`}
            </Typography>
          </CardContent>
        </Card>
      )}

      {mode === "FERRY" && (
        <Card
          style={{
            backgroundColor: "black",
            color: "whitesmoke",
            marginLeft: "60%",
            width: "100%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {`Journey from ${from} station to ${to} stop is ${
                Math.ceil(duration / 60) + " min"
              } with Ferry.`}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default TransportationStatus;
