import { Suspense } from "solid-js";

import fetchProfileData from "./mock-api";
import ProfilePage from "./profile";

export const SuspenseListApp = () => {
  const { user, posts, trivia } = fetchProfileData();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProfilePage user={user()} posts={posts()} trivia={trivia()} />
    </Suspense>
  );
};