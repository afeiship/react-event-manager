import React, { useEffect } from "react";
import connect from "./lib/connect";

export default connect(({ app }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log(app);
      app.emit("panel:ok", {
        data: [1, 2, 3]
      });
    }, 2000);
  }, []);

  return (
    <div className="panel">
      <h1>Panel title</h1>
      <p>I am a panel</p>
      <button
        onClick={e => {
          app.emit("panel:cancel");
        }}
      >
        Panel will cancel action
      </button>
    </div>
  );
});
