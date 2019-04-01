const initialState = {
  personalInfo: {
    name: "",
    email: "",
    dateOfBirth: "",
    address: ""
  },
  education: [],
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
  achievements: [],
  hobbies: []
};

export default initialState;
