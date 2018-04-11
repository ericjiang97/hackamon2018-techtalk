import React from "react";
import { Card, CardMedia } from "material-ui";
import { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

export default function RoomCard({ roomCode, roomLocation, roomPicture }) {
  return (
    <Card>
      <CardMedia src={roomPicture} />
      <CardContent>
        <Typography variant="subheading">{roomCode}</Typography>
        <Typography variant="title">{roomLocation}</Typography>
      </CardContent>
    </Card>
  );
}
