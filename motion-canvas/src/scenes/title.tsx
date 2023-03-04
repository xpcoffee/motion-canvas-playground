import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Layout, Txt } from "@motion-canvas/2d/lib/components";
import { waitFor } from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
    view.fill("#141414");
    view.fontFamily("Fira Code");
    view.add(
        <Layout justifyContent={"center"}>
            <Txt fill={"white"}>Distributed system</Txt>
        </Layout>
    );

    yield* waitFor(2);
});
