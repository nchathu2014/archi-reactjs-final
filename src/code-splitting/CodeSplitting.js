import React, { Suspense } from "react";

const LazyOtherComponent = React.lazy(() => import("./OtherComponent"));
const CodeSplitting = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <LazyOtherComponent title={"I am a component"} />
    </Suspense>
  );
};

export default CodeSplitting;
