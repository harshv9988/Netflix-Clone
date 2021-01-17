import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay data-testid="player" {...restProps}>
          <Inner>
            <video id="netflix-player" controls autoPlay>
              <source src={src} type="video/mp4" />
            </video>
            <Close onClick={() => setShowPlayer(!showPlayer)} />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
