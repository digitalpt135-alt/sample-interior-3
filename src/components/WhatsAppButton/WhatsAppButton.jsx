import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "919876543210";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello, I want to know more about your interior design services.`}
      className="floating-whatsapp"
      target="_blank"
    >
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;