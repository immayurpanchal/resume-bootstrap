const initialState = {
  personalInfo: {
    name: "Hello",
    email: "",
    dateOfBirth: "",
    address: ""
  },
  education: [
    {
      degree: "Msc",
      cpi: "7.8",
      year: "2019",
      institute: "DAIICt"
    },
    {
      degree: "BCA",
      cpi: "9.5",
      year: "2017",
      institute: "IDAR"
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
