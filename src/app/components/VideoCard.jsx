"use client"
import { Play } from "lucide-react";

export default function VideoCard() {
    return (
        // videocard Component

        <div className="videoCard border grid w-90 m-2 rounded-2xl">

            {/* thumbnail place */}
            <div className="thumbnail bg-gray-400 h-30 w-full rounded-t-2xl"></div>

                <div className="grid grid-cols-[1fr_5fr] items-center justify-center p-5">
            
                    <div className="rounded-full bg-amber-800 w-5/6 h-5/6"></div>
            
                    <div className="p-2 grid">
                    
                    <div className="flex items-center gap-2">
                            <p>title video Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="flex gap-2">
                        <span>Mannyest</span>
                        <span className="flex" > <Play strokeWidth={1}/> 100k</span>
                        <span>1 day ago</span>
                    </div>

                </div>

            </div>
        </div>
a
    );
}