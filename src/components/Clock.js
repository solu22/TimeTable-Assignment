/* Material-UI Import */
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import { Container } from "@mui/material";

/*React, Redux Import */
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let updatedTime = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(updatedTime);
    };
  });
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "10px" }}>
      <span>
        <WatchLaterSharpIcon style={{ color: "blue" }} />
      </span>

      <span style={{ marginLeft: "7px" }}>{time.toLocaleTimeString()}</span>
    </Container>
  );
};

export default Clock;
