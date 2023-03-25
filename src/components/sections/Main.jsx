import Summary from "./Summary.jsx";
import SummaryImage from "./SummaryImage.jsx";

function Main() {
    return (
        <main className="main py-10">
            <div className="container flex justify-center align-center text-center px-5 gap-4">
                <section className="flex flex-col justify-center align-center w-screen text-center">
                    <div className="container grid grid-cols-2 gap-4">
                        <Summary/>
                        <SummaryImage/>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;