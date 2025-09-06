// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        initContactForm();
    }
});

function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!validateContactForm(data)) {
            return;
        }
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual API call)
            await submitContactForm(data);
            
            // Show success message
            WebsiteUtils.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            
            // Reset form
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            WebsiteUtils.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(input);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(input);
        });
    });
}

function validateContactForm(data) {
    let isValid = true;
    
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    if (!data.email || !WebsiteUtils.validateEmail(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldError(field);
    
    switch (fieldName) {
        case 'name':
            if (value.length < 2) {
                showFieldError(fieldName, 'Name must be at least 2 characters long');
                return false;
            }
            break;
            
        case 'email':
            if (!WebsiteUtils.validateEmail(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
                return false;
            }
            break;
            
        case 'message':
            if (value.length < 10) {
                showFieldError(fieldName, 'Message must be at least 10 characters long');
                return false;
            }
            break;
    }
    
    return true;
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest('.form-group');
    
    // Remove existing error
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    
    formGroup.appendChild(errorDiv);
    
    // Add error styling to field
    field.style.borderColor = '#ef4444';
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorDiv = formGroup.querySelector('.field-error');
    
    if (errorDiv) {
        errorDiv.remove();
    }
    
    // Reset field styling
    field.style.borderColor = '#e1e5e9';
}

// Simulate form submission (replace with actual API call)
async function submitContactForm(data) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate random success/failure for demo purposes
    // In a real application, this would be an actual API call
    const success = Math.random() > 0.1; // 90% success rate for demo
    
    if (!success) {
        throw new Error('Simulated API error');
    }
    
    // Log the form data (in a real app, this would be sent to your backend)
    console.log('Contact form submitted:', data);
    
    return { success: true };
}

// Character counter for message field
function initCharacterCounter() {
    const messageField = document.getElementById('message');
    if (messageField) {
        const maxLength = 1000;
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.875rem;
            color: #666;
            margin-top: 0.25rem;
        `;
        
        messageField.parentNode.appendChild(counter);
        
        function updateCounter() {
            const remaining = maxLength - messageField.value.length;
            counter.textContent = `${remaining} characters remaining`;
            counter.style.color = remaining < 50 ? '#ef4444' : '#666';
        }
        
        messageField.addEventListener('input', updateCounter);
        updateCounter(); // Initial count
    }
}

// Initialize character counter when DOM is loaded
document.addEventListener('DOMContentLoaded', initCharacterCounter);