import { El } from "../elmain";
function App() {
    return El({
        element: "div",
        clasName: "flex flex-col",
        id: "rootsEl",
        children: ["welcome"]
    });
};
export default App;
