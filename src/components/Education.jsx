const Education = () => {
    return (
        <section id="educations">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <h3 className="text-3xl font-semibold text-gray-500">Education</h3>
                        <span className="text-sm font-bold uppercase text-gray-400">Collge & University Info</span>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-600">
                                <h3 className="text-xl font-semibold">Computer Science & Engineering </h3>
                                <time className="text-xs uppercase text-gray-600">Running</time>
                                <p className="mt-3">National University (2018-2024)</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-600">
                                <h3 className="text-xl font-semibold tracki">Higher Secondary School Certificate</h3>
                                <time className="text-xs uppercase text-gray-600">Jun 2018</time>
                                <p className="mt-3">Firoza Bashar Ideal College (2016-2018)</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-600">
                                <h3 className="text-xl font-semibold">Secondary School Certificate</h3>
                                <time className="text-xs uppercase text-gray-600">March 2016</time>
                                <p className="mt-3">Badshah Faisal Institute (2014-2016)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;