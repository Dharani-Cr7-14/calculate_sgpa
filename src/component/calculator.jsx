import { useState, useEffect } from "react";

export default function Calculator() {
  const [grades, setGrades] = useState({});
  const [sgpa, setSgpa] = useState(null);
  const [errors, setErrors] = useState({});

  const gradePoints = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "F": 0,
  };

  const gradeOptions = Object.keys(gradePoints);

  const courses = [
    { code: "U18MAI4201", title: "Probability & Statistics", credit: 4 },
    { code: "U18ITT4001", title: "Operating Systems", credit: 3 },
    { code: "U18ITI4204", title: "Computer Networks", credit: 4 },
    { code: "U18ITI6203", title: "Web Technology", credit: 4 },
    { code: "U18ITI7202", title: "Cloud Computing", credit: 3 },
    { code: "U18INI4600", title: "Engineering Clinic IV", credit: 3 },
    { code: "U18VET4101", title: "Universal Human Values 2", credit: 3 },
    { code: "U18CHT4000", title: "Environmental Science & Engg", credit: 0 },
  ];

  const handleChange = (code, value) => {
    setGrades(prev => ({ ...prev, [code]: value }));
  };

  useEffect(() => {
    let newErrors = {};
    courses.forEach(course => {
      const grade = grades[course.code];
      if (!grade && course.credit > 0) {
        newErrors[course.code] = "Grade required";
        return;
      }
      if (grade && !(grade in gradePoints) && course.credit > 0) {
        newErrors[course.code] = "Invalid grade";
        return;
      }
    });
    setErrors(newErrors);
    // Do not setSgpa here
  }, [grades]);

  const calculateSGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const grade = grades[course.code];
      const point = gradePoints[grade] ?? null;

      if (point !== null && course.credit > 0) {
        totalPoints += point * course.credit;
        totalCredits += course.credit;
      }
    });

    if (totalCredits === 0) {
      setSgpa("Invalid input");
    } else {
      setSgpa((totalPoints / totalCredits).toFixed(2));
    }
  };

  return (
    <>
      <section id="calculate" className="bg-secondary pt-5 font-hero-font pb-2 min-h-screen">
        <div className="flex justify-center">
          <p className="font-bold text-2xl">SGPA Calculating</p>
        </div>
        <p className="text-2xl mt-4 mb-6 ml-7">Enter The Grade You Have Obtained:</p>

        <div className="px-2">
          <div className="flex flex-wrap justify-evenly gap-4">
            {courses.map(course => (
              <form
                key={course.code}
                className={`border-2 p-4 w-full md:w-[32%] lg:w-[33%] bg-white rounded-md shadow ${errors[course.code] ? 'border-red-500' : 'border-amber-300'}`}
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="block mb-1">Code: {course.code}</label>
                <label className="block mb-1">Course: {course.title}</label>
                <label className="block mb-2">Credit: {course.credit}</label>
                <div className="flex items-center gap-2">
                  <select
                    className="border-2 border-amber-950 w-full px-2 py-1"
                    value={grades[course.code] || ""}
                    onChange={(e) => handleChange(course.code, e.target.value)}
                  >
                    <option value="">Select Grade</option>
                    {gradeOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {grades[course.code] && gradePoints[grades[course.code]] !== undefined && (
                    <span className="text-amber-700 font-bold">({gradePoints[grades[course.code]]})</span>
                  )}
                </div>
                {errors[course.code] && (
                  <div className="text-red-500 text-xs mt-1">{errors[course.code]}</div>
                )}
              </form>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="bg-amber-500 hover:bg-amber-600 size-15 text-2xl w-60 rounded-2xl text-white font-bold py-2 px-6 transition-all duration-200"
              onClick={calculateSGPA}
              disabled={Object.keys(errors).length > 0 || courses.some(c => c.credit > 0 && !grades[c.code])}
            >
              Calculate SGPA
            </button>
          </div>

          {sgpa !== null && (
  <div className="flex justify-center mt-8">
    <div className="bg-gradient-to-br from-amber-400 to-yellow-300 text-white rounded-2xl shadow-lg px-6 py-6 w-full md:w-1/2 text-center transition-all duration-500 hover:scale-105">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        🎓 SGPA Calculated
      </h2>
      <p className="text-4xl md:text-5xl font-extrabold text-white tracking-wide animate-bounce">
        {sgpa}
      </p>
      <p className="mt-2 text-white text-sm md:text-base">
        Great job! This is your  SGPA for the semester.
      </p>
    </div>
  </div>
)}

        </div>
      </section>
    </>
  );
}
