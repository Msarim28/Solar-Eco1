// Mobile menu toggle - updated for new structure
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navContainer = document.querySelector('.nav-container');

mobileMenuBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});

// Close menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('active');
    });
});

// Rest of your JavaScript remains the same

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const closeBtn = document.getElementById('close-btn');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle Chat
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
    });

    // Close Chat
    closeBtn.addEventListener('click', () => {
        chatContainer.classList.add('hidden');
    });

    function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        addMessage(message, 'user-message');
        messageInput.value = '';

        // Bot keyword-based replies
        let response = "Thanks for your message! Our team will respond shortly.";

        const msg = message.toLowerCase();

        if (msg.includes("price") || msg.includes("cost") || msg.includes("quote")) {
        response = "Our solar panel packages start at affordable rates. Would you like a detailed quote?";
    } else if (msg.includes("installation") || msg.includes("setup")) {
        response = "We provide professional installation services across supported regions.";
    } else if (msg.includes("countries") || msg.includes("available in") || msg.includes("locations")) {
        response = "We currently operate in 18+ countries including the US, UK, Canada, Australia, and more!";
    } else if (msg.includes("time") || msg.includes("delivery") || msg.includes("how long install")) {
        response = "Most solar installations take 2–4 weeks from order to activation.";
    } else if (msg.includes("warranty") || msg.includes("guarantee")) {
        response = "Our solar panels come with a 25-year performance warranty.";
    } else if (msg.includes("maintenance") || msg.includes("service")) {
        response = "We provide annual maintenance and cleaning services for maximum efficiency.";
    } else if (msg.includes("saving") || msg.includes("bill") || msg.includes("electricity")) {
        response = "On average, customers save 50–70% on electricity bills with our solar systems.";
    } else if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
        response = "Hello! 👋 How can we assist you with your solar needs today?";
    } else if (msg.includes("roof space") || msg.includes("space needed")) {
        response = "Most homes require 200–400 sq. ft. of roof space depending on energy usage.";
    } else if (msg.includes("cloudy") || msg.includes("rainy") || msg.includes("night")) {
        response = "Solar panels still generate power on cloudy days, though output is lower. At night, stored battery power is used.";
    } else if (msg.includes("life") || msg.includes("how long last") || msg.includes("durability")) {
        response = "Solar panels typically last 25–30 years with proper maintenance.";
    } else if (msg.includes("subsidy") || msg.includes("government") || msg.includes("tax credit")) {
        response = "Many regions offer tax credits, subsidies, or rebates for solar adoption. Check your local programs!";
    } else if (msg.includes("financing") || msg.includes("loan") || msg.includes("installment")) {
        response = "Yes, we offer flexible financing and installment plans to make solar affordable.";
    } else if (msg.includes("battery") || msg.includes("storage") || msg.includes("backup")) {
        response = "We provide battery storage solutions so you can use solar power at night or during outages.";
    } else if (msg.includes("grid") || msg.includes("off grid") || msg.includes("on grid")) {
        response = "We offer both on-grid and off-grid solar solutions depending on your needs.";
    } else if (msg.includes("sell power") || msg.includes("excess electricity") || msg.includes("net metering")) {
        response = "Yes! Through net metering, you can sell excess electricity back to the grid in many regions.";
    } else if (msg.includes("environment") || msg.includes("eco friendly")) {
        response = "Solar energy reduces carbon emissions and is one of the cleanest energy sources.";
    } else if (msg.includes("panel types") || msg.includes("monocrystalline") || msg.includes("polycrystalline")) {
        response = "We offer monocrystalline (high efficiency), polycrystalline (cost-effective), and thin-film solar panels.";
    } else if (msg.includes("efficiency") || msg.includes("output")) {
        response = "Our panels operate at 18–22% efficiency, among the best in the industry.";
    } else if (msg.includes("weather") || msg.includes("hail") || msg.includes("storm")) {
        response = "Solar panels are built to withstand hail, heavy rain, and strong winds.";
    } else if (msg.includes("cleaning") || msg.includes("wash panels")) {
        response = "Panels should be cleaned 2–3 times per year, or more in dusty areas.";
    } else if (msg.includes("inverter") || msg.includes("how inverter works")) {
        response = "Inverters convert DC electricity from panels into AC electricity for your home.";
    } else if (msg.includes("monitor") || msg.includes("tracking") || msg.includes("app")) {
        response = "Yes, you can monitor your system's performance through our mobile app.";
    } else if (msg.includes("residential") || msg.includes("home solar")) {
        response = "We provide customized residential solar solutions for all home sizes.";
    } else if (msg.includes("commercial") || msg.includes("business solar")) {
        response = "We also provide large-scale solar solutions for businesses and industries.";
    } else if (msg.includes("sell panels") || msg.includes("buy panels only")) {
        response = "Yes, we sell panels separately, but we recommend full system packages for maximum efficiency.";
    } else if (msg.includes("expand system") || msg.includes("add panels")) {
        response = "Yes, you can expand your system later by adding more panels or batteries.";
    } else if (msg.includes("government approval") || msg.includes("permit")) {
        response = "We assist with all government permits and approvals needed for solar installation.";
    } else if (msg.includes("return on investment") || msg.includes("roi")) {
        response = "Most customers achieve ROI within 3–6 years, depending on energy savings.";
    } else if (msg.includes("heat") || msg.includes("hot weather")) {
        response = "Solar panels perform slightly less efficiently in extremely hot weather, but still generate energy.";
    } else if (msg.includes("cold weather") || msg.includes("snow")) {
        response = "Solar panels work in cold climates. Snow usually slides off panels due to their angle.";
    } else if (msg.includes("night use") || msg.includes("after sunset")) {
        response = "At night, stored battery power or grid electricity is used.";
    } else if (msg.includes("safety") || msg.includes("fire") || msg.includes("shock")) {
        response = "Solar systems are very safe when installed professionally and inspected regularly.";
    } else if (msg.includes("design") || msg.includes("aesthetic") || msg.includes("roof look")) {
        response = "Our sleek, modern panel designs blend well with most rooftops.";
    } else if (msg.includes("custom solution") || msg.includes("report") || msg.includes("analysis")) {
        response = "Please share your location and contact details so we can prepare a customized solar solution.";
    } else if (msg.includes("future proof") || msg.includes("latest technology")) {
        response = "We provide the latest high-efficiency solar panels and smart inverters.";
    } else if (msg.includes("water heating") || msg.includes("solar water")) {
        response = "Yes, we also offer solar water heating solutions for homes and businesses.";
    } else if (msg.includes("moving house") || msg.includes("relocate system")) {
        response = "Yes, your solar system can be relocated to a new property with professional help.";
    } else if (msg.includes("insurance") || msg.includes("cover panels")) {
        response = "Many home insurance policies cover solar panels. We also offer additional coverage options.";
    } else if (msg.includes("noise") || msg.includes("sound")) {
        response = "Solar panels are completely silent. Inverters may produce a very low hum.";
    } else if (msg.includes("recycle") || msg.includes("dispose panels")) {
        response = "Old panels can be recycled. We follow eco-friendly disposal methods.";
    } else if (msg.includes("jobs") || msg.includes("career") || msg.includes("work with you")) {
        response = "We often have opportunities in solar sales, installation, and engineering. Check our careers page!";
    } else if (msg.includes("training") || msg.includes("learn solar")) {
        response = "We provide training programs for solar technicians and engineers.";
    } else if (msg.includes("partnership") || msg.includes("distributor")) {
        response = "Yes, we welcome partnerships and distributors. Please contact our sales team.";
    } else if (msg.includes("certification") || msg.includes("standards")) {
        response = "Our panels are certified to meet international quality and safety standards (IEC, UL).";
    } else if (msg.includes("monitoring cost") || msg.includes("extra cost app")) {
        response = "System monitoring via app is free with all our solar installations.";
    }else if (msg.includes("hello") || msg.includes("hi")) {
            response = "Hello! 👋 How can we assist you with your solar needs today?";
        }

        setTimeout(() => {
            addMessage(response, 'bot-message');
        }, 800);
    }
}


// ✅ GPT API Fallback
async function getGPTResponse(userMessage) {
    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: userMessage }]
            })
        });

        const data = await res.json();
        return data.choices?.[0]?.message?.content || "Sorry, I couldn’t understand that. Could you rephrase?";
    } catch (error) {
        console.error(error);
        return "Oops! Something went wrong. Please try again later.";
    }
}


    sendBtn.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }




        // js For Adiitional Animation
        // Add to your index.js file

// Scroll Animation Functionality
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Initialize animations on load
window.addEventListener('load', () => {
    animateOnScroll();
    
    // Animate hero content with a slight delay
    const heroContent = document.querySelector('.hero .container');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Animate on scroll
window.addEventListener('scroll', animateOnScroll);         

document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.number');

  function animateCounter(el, target, duration = 2000) {
    const startTime = performance.now();
    const span = el.querySelector('span');

    function step(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      span.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const isPercent = el.getAttribute('data-percent') === 'true';

        // Setup number display with span
        const span = document.createElement('span');
        span.textContent = '0';
        el.innerHTML = ''; // Clear any existing content
        el.appendChild(span);

        if (isPercent) {
          el.appendChild(document.createTextNode('%'));
        }

        animateCounter(el, target);
        observer.unobserve(el); // Run animation once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (counter) {
    observer.observe(counter);
  });
});

// Validation code

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || service === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!/^\d{7,15}$/.test(phone)) {
        alert("Phone number must be 7 to 15 digits.");
        return false;
    }

    // Optional: validate email format
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true; // Submit the form
}

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("batteryToggle");
    document.body.classList.add("light-theme");

    toggle.addEventListener("click", function () {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");
    });
  });

   // FAQ Accordion Functionality
   document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        
        const icon = question.querySelector('i');
        if (item.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Simple animation for service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 150 * index);
});

 document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.querySelector('footer form');
    
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      // Simple email validation
      if (emailInput.value && emailInput.value.includes('@')) {
        alert('You Have subscribed to Solar Eco ');
        emailInput.value = ''; // Clear the input
      } else {
        alert('Please enter a valid email address');
      }
    });
  });

//   FOTTER EMAIL VALIDATION
  document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('subscribeForm');
        const emailInput = document.getElementById('footerEmail');
        const emailError = document.getElementById('emailError');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous states
            emailInput.classList.remove('error');
            emailError.style.display = 'none';
            
            // Validate email
            const email = emailInput.value.trim();
            
            if (!email) {
                showError('Email is required');
                return;
            }
            
            if (!isValidEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }
            
            // If validation passes, show thank you alert
            showThankYouAlert();
            
            // In a real application, you would send the data to a server here
            console.log('Subscription successful for email:', email);
            
            // Reset form
            emailInput.value = '';
        });
        
        function showError(message) {
            emailInput.classList.add('error');
            emailError.textContent = message;
            emailError.style.display = 'block';
        }
        
        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        function showThankYouAlert() {
            const alert = document.getElementById('thankYouAlert');
            alert.classList.add('active');
        }
        
        window.closeAlert = function() {
            const alert = document.getElementById('thankYouAlert');
            alert.classList.remove('active');
        }
    });