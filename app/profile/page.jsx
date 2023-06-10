"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {

  const router = useRouter();

  //This react hook allows us to access user session data
  const { data: session } = useSession();

  //useState is for stateful data
  const [myPosts, setMyPosts] = useState([]);
  
  //Asyncronous function to fetch posts from user id specific session
  //Await functions in javascript waits to fulfill a Promise
  useEffect(() => {
    const fetchPosts = async () => {

      //fetch from api endpoint
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if(session?.user.id) fetchPosts();
  }, [session?.user.id]);


  const handleEdit = (post) => {
    //Call API endpoint in app/api/prompt/[id]/route.js
    router.push(`/update-prompt?id=${post._id}`);
  
  }

  const handleDelete = async (post) => {
    
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

    if(hasConfirmed){
      //Call API endpoint in app/api/prompt/[id]/route.js
      try{
        await fetch(`/api/prompt/&{post._id.toString()}`, {
          method: 'DELETE'
        });
        
        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch(error){
        console.log(error);
      }

    }
  }

  return (
   
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
    
    
  );
};

export default MyProfile;