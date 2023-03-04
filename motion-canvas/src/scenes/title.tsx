import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Layout, Text } from "@motion-canvas/2d/lib/components";
import { waitFor } from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
    view.add(
        <Layout justifyContent={"center"}>
            <Text fill={"white"}>Distributed system</Text>
        </Layout>
    );

    yield* waitFor(2);
});
