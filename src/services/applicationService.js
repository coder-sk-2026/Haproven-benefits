// src/services/applicationService.js

import applications from "@/data/applications.json";

import generateBenefitId from "@/utils/generateBenefitId";


// Check already applied
export function hasApplied(
  studentId,
  benefitId
) {

  return applications.some(
    (application) =>
      application.studentId === studentId &&
      application.benefitId === benefitId
  );

}



// Create new benefit application
export function createApplication({

  student,
  benefit

}) {


  // Already applied check

  if (
    hasApplied(
      student.id,
      benefit.id
    )
  ) {

    return {

      success:false,

      message:
      "You have already applied for this benefit."

    };

  }



  const benefitCode =
    generateBenefitId(
      applications
    );



  const newApplication = {


    applicationId:
    `APP-${applications.length + 1}`,



    benefitCode,



    studentId:
    student.id,



    benefitId:
    benefit.id,



    status:
    "Pending",



    appliedAt:
    new Date().toISOString(),



    approvedAt:
    null,



    pdfUrl:
    null

  };



  // Demo purpose
  console.log(
    "New Application:",
    newApplication
  );



  return {

    success:true,

    data:newApplication

  };


}




// Get student applications

export function getStudentApplications(
  studentId
){

  return applications.filter(

    (application)=>

      application.studentId === studentId

  );

}





// Get single application

export function getApplicationById(
  applicationId
){

  return applications.find(

    (application)=>

      application.applicationId === applicationId

  );

}





// Update application status

export function updateApplicationStatus(
  applicationId,
  status
){

  const application =
    applications.find(

      (item)=>
      item.applicationId === applicationId

    );



  if(!application){

    return {

      success:false,

      message:"Application not found"

    };

  }



  application.status = status;



  if(status==="Approved"){

    application.approvedAt =
    new Date().toISOString();

  }



  return {

    success:true,

    data:application

  };


}
