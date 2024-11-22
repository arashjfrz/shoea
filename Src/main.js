import App from "./app.js";
import { router } from "./navigo.js";
import '../style.css';




const root = document.getElementById("app");
root.appendChild(App());
router.resolve();

