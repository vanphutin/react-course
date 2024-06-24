import React, { useState, useEffect } from "react";
// higher-order component (HOC) withLoading
function withLoading(Component) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Simulate an API call
      setTimeout(() => {
        setData([
          {
            name: "VPT",
            age: 20,
          },
        ]);
      }, 2000); // Simulate loading time
    }, []);

    if (!data || data.length <= 0) return <div>Loading ...</div>;

    return <Component data={data} {...props} />;
  };
}

export default withLoading;
