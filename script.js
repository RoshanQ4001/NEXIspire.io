document.addEventListener("DOMContentLoaded", () => {
    const pricingContainer = document.querySelector('.pricing-container');
    const teamContainer = document.querySelector('.team-container');

    // Pricing data
    const pricingPlans = [
        {
            name: "Basic Package",
            price: "$50/month",
            description: "For small websites with low traffic.",
        },
        {
            name: "Standard Package",
            price: "$100/month",
            description: "For medium traffic websites.",
        },
        {
            name: "Premium Package",
            price: "$200/month",
            description: "For high traffic and ecommerce websites.",
        }
    ];

    // Team data
    const teamMembers = [
        {
            name: "Roshan Panda",
            role: "Founder & CEO",
            image: "/images/team1.jpg"
        },
        {
            name: "Soyam Sarthak Swain",
            role: "Chief Operation Officer",
            image: "/images/team2.jpg"
        },
        {
            name: "Naseeb Nandan Pradhan",
            role: "Chief Finance Officer",
            image: "/images/team3.jpg"
        },
        {
            name: "Priyanshu Sahoo",
            role: "Chief Technology Officer",
            image: "/images/team4.jpg"
        },
        {
            name: "Kumar Bibhudatta",
            role: "Chief Management Officer",
            image: "/images/team5.jpg"
        },
    ];

    // Add pricing cards
    pricingPlans.forEach(plan => {
        const card = document.createElement('div');
        card.classList.add('pricing-card');
        card.innerHTML = `
            <h3>${plan.name}</h3>
            <p class="price">${plan.price}</p>
            <p>${plan.description}</p>
        `;
        pricingContainer.appendChild(card);
    });

    // Add team members
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('team-member');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamContainer.appendChild(card);
    });
});
