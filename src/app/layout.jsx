import "@/assets/styles/global.css"
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function RootLayout({children}) {
    
  return (
    <html lang="en">
      <body className="bg-[#0F0F0F] text-white">

        <Header/>

        <div className="grid grid-cols-[1fr_7fr]">
          
          <div>
            <Sidebar/>
          </div>

          <div>
            {children}
          </div>

        </div>
        
      </body>
    </html>
  );

}



