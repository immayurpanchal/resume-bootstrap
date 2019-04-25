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
      cpi: "",
      year: "",
      institute: ""
    },
    {
      degree: "",
      cpi: "",
      year: "",
      institute: ""
    }
  ],
  skills: {
    expertise: "",
    programmingLanguages: "",
    toolsAndTechnologies: "",
    technicalElectives: ""
  },
  professionalExperience: [],
  projects: [],
  position: [],
  achievements: [],
  hobbies: []
};

export default initialState;
