// src/utils/generateRequestId.js

export default function generateRequestId(requests = []) {

  const number = requests.length + 1;

  const serial = String(number).padStart(4, "0");

  return `REQ-INS-${serial}`;
}





// import generateRequestId from "@/utils/generateRequestId";
// import instituteRequests from "@/data/instituteRequests.json";


// const requestId = generateRequestId(instituteRequests);


// console.log(requestId);
