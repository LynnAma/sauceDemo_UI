export const role = {
    standardUser: "standardUser",
    problemUser: "problemUser",
    lockoutUser: "lockoutUser",
    unknown: "unknown"
  };
  
  export const stagingUsers = [
    {
      role: role.standardUser,
      username: "standard_user",
      password: "secret_sauce",
      
    },
    {
      role: role.problemUser,
      username: "problem_user",
      password: "secret_sauce",
    },
    
    {
      role: role.unknown,
      username: "Unknown User",
      email: "",
    },
    
  
  ];
  
  export const productionUsers = [
    
    {
        role: role.standardUser,
        email: "",
        password: "",
      
      },
      {
        role: role.problemUser,
        usee: "",
        password: "",
      },
      
      {
        role: role.unknown,
        name: "",
        username: "",
      },
        
    
          
  ];
  