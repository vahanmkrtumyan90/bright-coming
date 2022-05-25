import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/style.scss";

import ComingSoon01 from "./pages/comingSoon01";
// import ComingSoon02 from "./pages/comingSoon02";
// import ComingSoon03 from "./pages/comingSoon03";
// import ComingSoon04 from "./pages/comingSoon04";
// import ComingSoon05 from "./pages/comingSoon05";
// import ComingSoon06 from "./pages/comingSoon06";
// import ComingSoon07 from "./pages/comingSoon07";
// import ComingSoon08 from "./pages/comingSoon08";
// import ComingSoon09 from "./pages/comingSoon09";
// import ComingSoon10 from "./pages/comingSoon10";
// import ComingSoon11 from "./pages/comingSoon11";
// import ComingSoon12 from "./pages/comingSoon12";
// import ComingSoon13 from "./pages/comingSoon13";
// import ComingSoon14 from "./pages/comingSoon14";
// import ComingSoon15 from "./pages/comingSoon15";
// import ComingSoon16 from "./pages/comingSoon16";
// import ComingSoon17 from "./pages/comingSoon17";
// import ComingSoon18 from "./pages/comingSoon18";
// import ComingSoon19 from "./pages/comingSoon19";
// import ComingSoon20 from "./pages/comingSoon20";

import LandingPage from "./pages";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={LandingPage}
        />
        {/* <Route
          path={process.env.PUBLIC_URL + "/coming-soon-one"}
          component={ComingSoon01}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-two"}
          component={ComingSoon02}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-three"}
          component={ComingSoon03}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-four"}
          component={ComingSoon04}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-five"}
          component={ComingSoon05}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-six"}
          component={ComingSoon06}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-seven"}
          component={ComingSoon07}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-eight"}
          component={ComingSoon08}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-nine"}
          component={ComingSoon09}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-ten"}
          component={ComingSoon10}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-eleven"}
          component={ComingSoon11}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-twelve"}
          component={ComingSoon12}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-thirteen"}
          component={ComingSoon13}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-fourteen"}
          component={ComingSoon14}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-fifteen"}
          component={ComingSoon15}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-sixteen"}
          component={ComingSoon16}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-seventeen"}
          component={ComingSoon17}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-eighteen"}
          component={ComingSoon18}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-nineteen"}
          component={ComingSoon19}
        />
        <Route
          path={process.env.PUBLIC_URL + "/coming-soon-twenty"}
          component={ComingSoon20}
        /> */}
        <Route exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
