import React from "react";
import { Spinner, Picture, LockBody, ReleaseBody } from "./styles/loading";

export default function Loading({ src, ...restprops }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
