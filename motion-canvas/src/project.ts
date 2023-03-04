import { makeProject } from "@motion-canvas/core/lib";

import title from "./scenes/title?scene";
import basicDistributedSystem from "./scenes/basic-distributed-system?scene";

export default makeProject({
    scenes: [title, basicDistributedSystem],
    background: "#141414",
});
