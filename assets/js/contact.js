// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formObject = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Validate form
    if (validateContactForm(formObject)) {
        // Show loading state
        const submitBtn = event.target.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset form
            event.target.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            if (window.WebsiteUtils) {
                window.WebsiteUtils.showNotification('Message sent successfully!', 'success');
            }
        }, 2000);
    }
}

function validateContactForm(data) {
    const errors = [];
    
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    // Validate email
    if (!data.email || !window.WebsiteUtils.validateEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Validate subject
    if (!data.subject || data.subject.trim().length < 5) {
        errors.push('Subject must be at least 5 characters long');
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    // Show errors if any
    if (errors.length > 0) {
        if (window.WebsiteUtils) {
            window.WebsiteUtils.showNotification(errors.join('. '), 'error');
        }
        return false;
    }
    
    return true;
}

// Real form submission function (replace with actual implementation)
async function submitContactForm(formData) {
    try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            return { success: true, message: 'Message sent successfully!' };
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return { success: false, message: 'Failed to send message. Please try again.' };
    }
}