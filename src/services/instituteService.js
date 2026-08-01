// src/services/instituteService.js

import instituteRequests from "@/data/instituteRequests.json";
import generateRequestId from "@/utils/generateRequestId";


// Create new institute request
export function createInstituteRequest(data) {

  const requestId = generateRequestId(instituteRequests);


  const newRequest = {

    requestId,

    studentId: data.studentId,

    studentName: data.studentName,

    email: data.email,

    mobile: data.mobile,


    institute: {

      name: data.instituteName,

      city: data.city,

      state: data.state

    },


    message: data.message,


    status: "Pending",


    requestedAt: new Date().toISOString(),


    review: {

      approved: false,

      reviewedAt: null,

      adminNote: ""

    }

  };


  // Demo purpose
  console.log("New Institute Request:", newRequest);


  return newRequest;

}



// Get all requests
export function getInstituteRequests() {

  return instituteRequests;

}



// Find request by ID
export function getRequestById(requestId) {

  return instituteRequests.find(
    (item) => item.requestId === requestId
  );

}



// Update request status
export function updateRequestStatus(
  requestId,
  status,
  note = ""
) {

  const request = instituteRequests.find(
    (item) => item.requestId === requestId
  );


  if (!request) {

    return {
      success: false,
      message: "Request not found"
    };

  }


  request.status = status;


  request.review = {

    approved: status === "Approved",

    reviewedAt: new Date().toISOString(),

    adminNote: note

  };


  return {

    success: true,

    data: request

  };

}
