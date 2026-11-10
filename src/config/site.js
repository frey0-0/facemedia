// Edit this file to change contact details and links across the whole site.
export const SITE = {
  name: "FaceMedia",
  founder: "Aryan Bhalla",
  // Business email. The contact form opens the visitor's email app addressed to this.
  email: "aryanbhalla@facemedia.in",
  // Contact form delivery via Web3Forms (web3forms.com). Messages go straight to the email above.
  // The key is public by design: it can only send messages to this inbox.
  // Set formEndpoint to "" to fall back to opening the visitor's email app instead.
  formEndpoint: "https://api.web3forms.com/submit",
  formKey: "2e0ec4e5-1c64-4988-a068-4a6e6eb4c09f",
  social: {
    agencyInstagram: "https://www.instagram.com/facemedia.co/",
    instagram: "https://www.instagram.com/aryanbhalla/",
    youtube: "https://www.youtube.com/@AryanBhalla",
    linkedin: "https://www.linkedin.com/in/aryanbhalla/",
    x: "https://x.com/AryanBhalla57",
  },
  handles: {
    agencyInstagram: "@facemedia.co",
    instagram: "@aryanbhalla",
    youtube: "@AryanBhalla",
  },
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "storytelling", label: "My Work" },
  { id: "services", label: "Services" },
  { id: "story", label: "My Story" },
  { id: "contact", label: "Contact" },
];

// Files in /public. Swap or add files there and reference them here.
export const asset = (name) => `${import.meta.env.BASE_URL}${name}`;
