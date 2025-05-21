import { GraduationCap, Calendar, Award, School } from "lucide-react";

const Education = () => {
    const educationData = [
        {
            degree: "Computer Science & Engineering",
            institution: "National University",
            period: "2018-2022",
            grade: "CGPA - 2.80 out of 4.00",
            year: "2024",
            icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
        },
        {
            degree: "Higher Secondary School Certificate",
            institution: "Firoza Bashar Ideal College",
            period: "2016-2017",
            grade: "GPA - 4.17 out of 5.00",
            year: "2018",
            icon: <Award className="w-6 h-6 text-green-500" />,
        },
        {
            degree: "Secondary School Certificate",
            institution: "Badshah Faisal Institute",
            period: "2014-2015",
            grade: "GPA - 4.67 out of 5.00",
            year: "2016",
            icon: <School className="w-6 h-6 text-purple-500" />,
        },
    ];

    return (
        <section id="education" className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50 dark:bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Education Journey
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 dark:text-gray-400">
                        My academic background and achievements
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white dark:bg-[#1e1e1e] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">{edu.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-2">
                                        {edu.degree}
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                                            {edu.grade}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
