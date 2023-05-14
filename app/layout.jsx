import '@styles/globals.css';

export const metadata = {
    title: 'Prompto',
    description: 'Discover & Share AI Prompts with this Next.js Full Stack Web Application'
};

export default function RootLayout({ children }){
  return(
    <html lang="en">
        <h1>Prompto</h1>
        <body>
            <main className='app'>
              { children }
            </main>
        </body>
    </html>
  );
}

