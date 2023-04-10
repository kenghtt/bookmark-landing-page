function ExtensionLayout({ browser, extensionVersion, positionValue, topValue, leftValue}) {
    return ( 
        <section className={`bg-white shadow-xl flex flex-col items-center gap-4 p-[3rem] md:${positionValue} md:top-[${topValue}] md:left-[${leftValue}]`}>
            
            <div className="flex flex-col items-center gap-2">
                <img src={`/images/logo-${browser}.svg`} alt={`${browser} Logo`} />
                <h2 className="capitalize">Add to {browser}</h2>
                <p>Minimum version {extensionVersion}</p>
            </div>
            
            <img src="/images/bg-dots.svg" alt="background dots" />
            <button className="btn btn-primary">Add & Install Extension</button>

        </section>
     );
}

export default ExtensionLayout;