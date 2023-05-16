import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';



export const metadata = {
    title: 'Prompto',
    description: 'Discover & Share AI Prompts with this Next.js Full Stack Web Application'
};

export default function RootLayout({ children }){
  return(
    <html lang="en">
        <body>
            <main className='app'>
              <Navbar />
              { children }
            </main>
        </body>
    </html>
  );
}

