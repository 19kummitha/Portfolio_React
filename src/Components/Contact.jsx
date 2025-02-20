import { FaMobileAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <div>
      <h1>Contact me</h1>
      <ul>
        <li>
          <FaMobileAlt style={{ marginRight: "8px" }} />
          Phone
        </li>
        <li>
          <FaEnvelope style={{ marginRight: "8px" }} />
          Email
        </li>
        <li>
          <FaLinkedin style={{ marginRight: "8px" }} />
          LinkedIn
        </li>
        <li></li>
      </ul>
    </div>
  );
}
