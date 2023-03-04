import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Circle, Layout, Txt, Rect, Img } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { chain, all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { BBox, Direction } from "@motion-canvas/core/lib/types";
import userImg from "../assets/user.svg";
import databaseImg from "../assets/database.svg";
import { createSignal } from "@motion-canvas/core/lib/signals";

export default makeScene2D(function* (view) {
    const userGroup = createRef<Layout>();
    const userImage = createRef<Img>();
    const userImageScale = 2;

    const serverGroup = createRef<Layout>();
    const serverImage = createRef<Layout>();

    const databaseGroup = createRef<Layout>();
    const databaseImage = createRef<Img>();
    const databaseImageScale = 2;

    view.fill("#141414");
    view.fontFamily("Fira Code");
    view.add(
        <Layout y={-350} justifyContent={"center"}>
            <Layout ref={userGroup}>
                <Txt x={300} fill={"white"}>
                    User
                </Txt>
                <Img ref={userImage} src={userImg} scale={userImageScale} />
            </Layout>

            <Layout ref={serverGroup} y={350}>
                <Txt x={300} fill={"white"}>
                    Server
                </Txt>
                <Layout ref={serverImage}>
                    <Txt fill={"white"} fontWeight={400}>
                        {"< / >"}
                    </Txt>
                    <Rect width={200} height={150} stroke={"white"} lineWidth={2} radius={10} />
                </Layout>
            </Layout>

            <Layout ref={databaseGroup} y={650}>
                <Txt x={300} fill={"white"}>
                    Database
                </Txt>
                <Img ref={databaseImage} src={databaseImg} scale={databaseImageScale} />
            </Layout>
        </Layout>
    );

    yield* slideTransition(Direction.Right, 1);
    yield* waitFor(1);
    yield* chain(userImage().scale(1.5 * userImageScale, 0.5), waitFor(1), userImage().scale(1 * userImageScale, 0.5));
    yield* waitFor(1);
    yield* chain(serverImage().scale(1.5, 0.5), waitFor(1), serverImage().scale(1, 0.5));
    yield* waitFor(1);
    yield* chain(
        databaseImage().scale(1.5 * databaseImageScale, 0.5),
        waitFor(1),
        databaseImage().scale(1 * databaseImageScale, 0.5)
    );
});
