import "@/assets/styles/global.css"
import Header from "../components/Header.jsx";


export default function RootLayout({children}) {
    
  return (
    <html lang="en">
      <body className="bg-[#0F0F0F]">

        <Header/>
        {children}
        
      </body>
    </html>
  );

}



