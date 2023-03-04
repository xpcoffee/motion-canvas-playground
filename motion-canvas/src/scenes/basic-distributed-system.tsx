import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Circle, Layout, Text, Rect } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { chain, all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";

export default makeScene2D(function* (view) {
    const userGroup = createRef<Layout>();
    const serverGroup = createRef<Layout>();
    const databaseGroup = createRef<Layout>();

    view.add(
        <Layout y={-350} justifyContent={"center"}>
            <Layout ref={userGroup} justifyContent={"center"}>
                <Text fill={"white"}>User</Text>
                <Rect width={200} height={150} stroke={"white"} lineWidth={2} radius={10} />
            </Layout>

            <Layout ref={serverGroup} y={350} justifyContent={"center"}>
                <Text fill={"white"}>Server</Text>
                <Rect width={200} height={150} stroke={"white"} lineWidth={2} radius={10} />
            </Layout>

            <Layout ref={databaseGroup} y={650} justifyContent={"center"}>
                <Text fill={"white"}>Database</Text>
                <Rect width={200} height={150} stroke={"white"} lineWidth={2} radius={10} />
            </Layout>
        </Layout>
    );

    yield* slideTransition(Direction.Right, 1);
    yield* waitFor(1);
    yield* chain(userGroup().scale(1.5, 0.5), waitFor(1), userGroup().scale(1, 0.5));
    yield* waitFor(1);
    yield* chain(serverGroup().scale(1.5, 0.5), waitFor(1), serverGroup().scale(1, 0.5));
    yield* waitFor(1);
    yield* chain(databaseGroup().scale(1.5, 0.5), waitFor(1), databaseGroup().scale(1, 0.5));
});

function* changeColor(circle: Circle) {
    yield* circle.fill("red", 0.5);
}
