// Passport 
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('passportPreview');
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
}

// disability description field
function toggleDetails() {
    const challengeSelect = document.getElementById("physicallyChallenged").value;
    const challengeDetails = document.getElementById("challengeDetails");

    challengeDetails.style.display = (challengeSelect === "Yes") ? "block" : "none";
}

function submitForm() {
    const agreeCheckbox = document.getElementById("agree");

    // checkbox
    if (!agreeCheckbox.checked) {
        alert("You must agree to the terms to continue.");
        return;
    }

    // Will extract data from html form
    const name = document.getElementById('name').value;
    const matricNumber = document.getElementById('matricNumber').value;
    const faculty = document.getElementById('faculty').value;
    const department = document.getElementById('department').value;
    const level = document.getElementById('level').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const physicallyChallenged = document.getElementById('physicallyChallenged').value;
    const challengeDescription = document.getElementById('challengeDescription').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const hostelType = document.getElementById('hostelType').value;
    const guardianName = document.getElementById('guardianName').value;
    const guardianPhone = document.getElementById('guardianPhone').value;
    const passportSrc = document.getElementById('passportPreview').src;

    // The populated confirmation section
    const confirmationContent = document.getElementById('confirmationContent');
    confirmationContent.innerHTML = `
        <div class="confirmation-header">
            <section class="header">
                <img src="images/fulafia.png" alt="logo">
                <h1>FEDERAL UNIVERSITY OF LAFIA</h1>
                <p>P.M.B. 146 LAFIA, NASARAWA STATE</p>
                <br>
                <h2>STUDENT AFFAIRS DIVISION</h2>
                <p>Hostel Accommodation Form<p>
            </section>
            <img src="${passportSrc}" alt="Passport" class="passport-print">
        </div>
        <div class="confirmation-details">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Matriculation Number:</strong> ${matricNumber}</p>
            <p><strong>Faculty:</strong> ${faculty}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Level:</strong> ${level}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            <p><strong>Physically Challenged?:</strong> ${physicallyChallenged}</p>
            <p><strong>Challenge Description:</strong> ${challengeDescription}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Hostel Choice:</strong> ${hostelType}</p>
            <p><strong>Guardian's Name:</strong> ${guardianName}</p>
            <p><strong>Guardian's Phone:</strong> ${guardianPhone}</p>
        </div>
        <h3>Note:</h3>
        <ol>
            <li>Students should only proceed to pay accommodation fee after they have been shortlisted by the division.</li>
            <li>Allocated bed spaces are non-transferable.</li>
            <li>Photocopies of receipt of payment for accommodation form, school fees and admission letter should be attached to this form on submission.</li>
            <li>The University reserves the right to retrieve room allocation without refund from a student who violates the rules and regulations governing student's residency in the Hostel.</li>
        </ol>
        <h3>Attestation</h3>
        <p>
            I <strong> ${name} </strong> hereby declare that the information provided in this form is true and accurate to the best of my knowledge. 
            I understand that providing false information may lead to disqualification from the hostel accommodation process.
        </p>
    `;

    // Hide form and show confirmation
    document.getElementById('hostelForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}
