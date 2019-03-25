const initialState = {
  personalInfo: {
    name: "",
    email: "",
    dateOfBirth: "",
    address: ""
  },
  education: [
    {
      degree: "",
      institute: "",
      year: "",
      cpi: 0
    }
  ],
  skills: {
    expertise: "",
    programmingLanguages: "",
    toolsAndTechnologies: "",
    technicalElectives: ""
  },
  professionalExperience: [
    {
      companyName: "",
      description: "",
      guide: "",
      start: "",
      end: "",
      teamSize: 0
    }
  ],
  projects: [
    {
      companyName: "",
      description: "",
      guide: "",
      start: "",
      end: "",
      teamSize: 0
    }
  ],
  position: ["member of anything"],
  achievements: ["1st rank in cs iq test"],
  hobbies: ["chess"]
};

export default initialState;
