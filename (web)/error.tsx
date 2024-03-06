'use client';

export default function Error ({
    error,
    reset,
}: {
    error: Error &{digest?: string};
    reset: () => void;
}) {
    return (
       
        <div className="continer mx-auto">
            <h2 className="font-heading text-red-800 mb-10">SomeThing went Wrong!</h2>
            
            <button onClick={() => reset()} className="btn-primary">Try Again</button>
        </div>
       );
}