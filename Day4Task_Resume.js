const resume = {
  "name": "Jitender Kumar M",
  "summary": "Ambitious and Diligent 3rd-Year Computer Science Student with Robust Programming Skills, Enthusiastically Pursuing a Bachelor's Degree and Eager to Contribute to Dynamic Projects.",
  "address": "3/270 Kalugoorani, Ramanathapuram-623536, Tamilnadu",
  "phone": "6383561947",
  "email": "jitendermaruthu2004@gmail.com",
  "education": [
    {
      "institution": "University College of Engineering (BIT Campus), Tiruchirapalli",
      "degree": "B.E in Computer Science and Engineering",
      "dates": "August 2021 - Present",
      "cgpa": "8.715 CGPA (4th semester)"
    },
    {
      "institution": "Allwin Matric Hr Sec School, Ramanathapuram",
      "degree": "HSC",
      "dates": "July 2020 - May 2021",
      "percentage": "93.4%"
    }
  ],
  "additional": {
    "internship": "30 days Internship on IOT with Pantech Solutions Certification",
    "codingContest": "Achieved 5th place in a prestigious coding contest organized by Top Coders",
    "nptelCertificate": "Software Testing, IIT Bangalore",
    "workshop": "Google Cloud Workshop - IIT Madras"
  },
  "skills": {
    "programming": ["Java", "C"],
    "tools": ["Git", "GitHub", "Excel"],
    "webDevelopment": "Intermediate",
    "mobileAppDevelopment": "Beginner"
  },
  "languages": ["English", "Tamil", "Malayalam"]
};

// Using regular for loop
console.log("Using regular for loop:\n");
for (let i = 0; i < Object.keys(resume).length; i++) {
  const key = Object.keys(resume)[i];
  console.log(`${key}: ${resume[key]}`);
}

console.log("\n");

// Using for...in loop
console.log("\nUsing for...in loop:\n");
for (const key in resume) {
  console.log(`${key}: ${resume[key]}`);
}

console.log("\n");

// Using for...of loop
console.log("\nUsing for...of loop:\n");
for (const key of Object.keys(resume)) {
  console.log(`${key}: ${resume[key]}`);
}

console.log("\n");


// Using forEach for arrays
console.log("\nUsing forEach loop for arrays:\n");
resume.education.forEach((edu) => {
  console.log(`Institution: ${edu.institution}, Degree: ${edu.degree}, Dates: ${edu.dates}, CGPA: ${edu.cgpa || "N/A"}`);
});
