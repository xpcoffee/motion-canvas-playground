import "./global.css";

import title from "./scenes/title?scene";
import basicDistributedSystem from "./scenes/basic-distributed-system?scene";
import { makeProject } from "@motion-canvas/core";

export default makeProject({
    scenes: [title, basicDistributedSystem],
});
