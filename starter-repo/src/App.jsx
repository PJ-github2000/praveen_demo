import { HandMetal } from "lucide-react";
import ReusableComponent from "./components/ReusableComponent";
function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center">
      {/* Components starts here */}
     
     <div className="flex items-center gap-2">
        <HandMetal strokeWidth={2.75} />
        <h1 className="text-2xl font-bold ">
          Good! Now let&apos;s start the work
        </h1>
        
      </div>
      <ReusableComponent />

      {/* Components ends here */}
    </div>
  );
}

export default App;
