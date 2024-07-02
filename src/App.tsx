import React from "react";

import "./App.css";

function Home() {
    const [count, setCount] = React.useState(0);
    setCount(1);
    return <>{count}</>;
}

export default Home;
