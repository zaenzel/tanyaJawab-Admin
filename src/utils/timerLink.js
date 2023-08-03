import { useNavigate } from "react-router-dom";

export default function timerLink(link) {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate(link);
  }, 1000);
}
