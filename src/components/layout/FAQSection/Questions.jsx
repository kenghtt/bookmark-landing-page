function Questions(props) {

    return (

        <div className="mb-10">
            <section>
                <div className="">
                    <div className="flex flex-row  text-left h-3  ">
                        <div className="flex-1 justify-start ml-[20%]">
                            <div className="mb-3 border-t-2"></div>
                            <h4 className="">{props.question}</h4>
                        </div>
                        <div className="flex-none justify-end  mr-[20%]">
                            <div className="mb-3 border-t-2"></div>
                            <div className=" py-3">
                                <img src="../images/icon-arrow.svg" alt="arrow icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Questions;