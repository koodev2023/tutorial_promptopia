"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (post) => {
    const response = await fetch(`/api/users/${params?.id}/posts`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    if (params?.id) fetchPosts();
  }, [params?.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page.`}
      data={posts}
    />
  );
};

export default UserProfile;
