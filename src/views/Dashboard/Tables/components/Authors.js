import React from "react";

const Authors = () => {
  // Redirect to an external URL when the component mounts
  React.useEffect(() => {
    window.location.href = "https://blackjack.arbet.casino/";
  }, []);

  return <div></div>; // Return an empty component since the redirection will happen automatically
};

export default Authors;