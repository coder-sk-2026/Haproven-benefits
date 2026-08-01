export default function checkEligibility(student, benefit) {
  // Student exists?
  if (!student) {
    return {
      eligible: false,
      message: "Student not found."
    };
  }

  // Student account active?
  if (student.status !== "Active") {
    return {
      eligible: false,
      message: "Your account is not active."
    };
  }

  // Profile completed?
  if (!student.profileCompleted) {
    return {
      eligible: false,
      message: "Complete your student profile first."
    };
  }

  // Email verified?
  if (!student.emailVerified) {
    return {
      eligible: false,
      message: "Please verify your email."
    };
  }

  // Benefit active?
  if (benefit.status !== "Active") {
    return {
      eligible: false,
      message: "This benefit is not currently available."
    };
  }

  // Already applied?
  if (student.appliedBenefits.includes(benefit.id)) {
    return {
      eligible: false,
      message: "You have already applied for this benefit."
    };
  }

  // Everything is OK
  return {
    eligible: true,
    message: "You are eligible to apply."
  };
}
