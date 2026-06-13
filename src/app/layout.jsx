import "@/assets/styles/global.css"

export default function RootLayout({children}) {
    
  return (
    <html lang="en">
      <body className="bg-[#0F0F0F]">{children}</body>
    </html>
  );

}



