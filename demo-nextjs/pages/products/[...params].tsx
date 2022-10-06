import { useRouter } from 'next/router';
import * as React from 'react';

export interface CatchAllProps {}

export default function CatchAll(props: CatchAllProps) {
  const route = useRouter();
  console.log(route.query.params);

  return (
    <div>
      <h1>Param Page :</h1>
      <p>with param : {JSON.stringify(route.query)}</p>
    </div>
  );
}
