import { useEffect, useState } from "react";

const useFriendsData = () => {
 
  const [friends, setFriends] = useState(() => {
    const saved = sessionStorage.getItem("friends_temporary_data");
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(friends.length === 0);

  useEffect(() => {
    const fetchData = async () => {
    
      if (friends.length === 0) {
        const res = await fetch("/data.json");
        const data = await res.json();
        
        setFriends(data);
        
        sessionStorage.setItem("friends_temporary_data", JSON.stringify(data));
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  useEffect(() => {
    if (friends.length > 0) {
      sessionStorage.setItem("friends_temporary_data", JSON.stringify(friends));
    }
  }, [friends]);

  
  useEffect(() => {
    const handleUnload = () => {
      sessionStorage.removeItem("friends_temporary_data");
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return { friends, loading, setFriends };
};

export default useFriendsData;