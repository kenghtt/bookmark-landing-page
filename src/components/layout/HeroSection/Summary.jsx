function Summary() {


    return (
        <section className="">
            <div className="container flex-col align-center justify-center gap-4 mb-10">
                <h1 className="text-veryDarkBlue center text-2xl md:text-3xl">A Simple Bookmark Manager </h1>
                <p className="text-grayBlue px-20">
                    A clean and simple interface to organize
                    your favourite websites. Open a new browser tab and see
                    your sites load instantly. Try it for free.
                </p>

            </div>
            <div className="flex justify-center align-center gap-8">
                <button className="btn btn-primary">Get it on Chrome</button>
                <button className="btn bg-white text-veryDarkBlue">Get it on Firefox</button>
            </div>
        </section>
    );
}

export default Summary;