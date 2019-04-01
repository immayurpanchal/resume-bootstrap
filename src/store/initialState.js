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
  professionalExperience: [
    {
      companyName: "Jalaram",
      description: "Design",
      guide: "Dinesh Panchal",
      start: "01/01/2017",
      end: "01/02/2017",
      teamSize: 1
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
