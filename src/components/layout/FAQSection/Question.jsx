function Question(props) {

    return (

        <div className="mb-1">
            <section>
                <div className="grid grid-rows-1 h2 hover:text-red-500 hover:cursor-pointer">
                    {/*<div className="flex flex-row  text-left h-3 mb-10 ">*/}
                    <div className="flex flex-row  text-left h-3 mb-10 ">
                        <div className="flex-1 justify-start ml-[5%] md:ml-[20%]">
                            <div className="mb-3 border-t-2"></div>
                            <h3 className="">{props.question}</h3>
                        </div>
                        <div className="flex-none justify-end mr-[5%] md:mr-[20%]">
                            <div className="mb-3 border-t-2"></div>
                            <div className=" py-3">
                                {
                                    props.active ?
                                        <img className='rotate-180' src="../images/icon-arrow.svg" alt="arrow icon"/>
                                        :
                                        <img src="../images/icon-arrow.svg" alt="arrow icon"/>


                                }
                                {/*<img src="../images/icon-arrow.svg" alt="arrow icon"/>*/}
                            </div>
                        </div>
                    </div>
                    {
                        props.active &&
                        <div className="flex flex-row text-left mb-[1%]  ">
                            {/*<div className="flex-1 justify-start ml-[20%] mr-[20%]">*/}
                            <div className="flex-1 justify-start ml-[5%] mr-[5%] md:ml-[20%] md:mr-[20%]">
                                <p className="">{props.answer}</p>
                            </div>
                        </div>

                    }
                </div>
            </section>

        </div>
    );
}

export default Question;
