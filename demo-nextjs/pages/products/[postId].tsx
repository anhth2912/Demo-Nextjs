import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostdetailProps {}

export default function Postdetail(props: PostdetailProps) {
  const route = useRouter();
  console.log(route.query.postId);

  return (
    <div>
      <h1>Post detail</h1>
      <p>Param : {route.query.postId}</p>
    </div>
  );
}
