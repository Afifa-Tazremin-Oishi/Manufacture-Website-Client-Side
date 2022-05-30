import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://infinite-lake-36259.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);

  return { tools, setTools };
};

export default useTools;
