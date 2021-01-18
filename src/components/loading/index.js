import React from "react";
import { Spinner, Picture, LockBody, ReleaseBody } from "./styles/loading";

export default function Loading({ src, ...restprops }) {
  return (
    <>
      <LockBody />
      <Spinner>
        <Picture src={`/images/users/${src}.png`} />
      </Spinner>
    </>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
