import FadeUp from "../../components/FadeUp";

function CatchTreasure() {
    return (
        <FadeUp>
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <span className="text-4xl">🚧</span>
                <p className="text-jb-blue">Under construction</p>
            </div>
        </FadeUp>
    );
}

export default CatchTreasure;