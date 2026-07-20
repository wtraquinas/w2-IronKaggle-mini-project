import { LoaderCircle } from "lucide-react";

function LoadingSpinner() {

    return (

        <div className="flex justify-center py-6">

            <LoaderCircle
                size={40}
                className="animate-spin text-blue-700"
            />

        </div>

    );

}

export default LoadingSpinner;