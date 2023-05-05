import { ErrorBoundary } from "solid-js";

const Broken = (props: any) => {
    throw new Error("Oh No");
    return <>Never Getting Here</>
}

export default function ErrorBoundaryDemo() {
    return (
        <>
            <div>Before</div>
            <ErrorBoundary fallback={err => err}>
                <Broken />
            </ErrorBoundary>
            <div>After</div>
        </>
    );
}
