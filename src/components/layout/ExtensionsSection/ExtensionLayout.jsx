function ExtensionLayout({ browser, extensionVersion}) {
    return ( 
        <section className="flex flex-col items-center gap-2 p-5">
            <img src={`/images/logo-${browser}.svg`} alt={`${browser} Logo`} />
            <h2 className="capitalize">Add to {browser}</h2>
            <p>Minimum version {extensionVersion}</p>
            <img src="/images/bg-dots.svg" alt="background dots" />
            <button className="btn btn-primary">Add & Install Extension</button>
        </section>
     );
}

export default ExtensionLayout;