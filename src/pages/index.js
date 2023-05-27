import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Couto Store</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar /> 
      <main>
        <div style={{height:'100vh', textAlign:'center', fontSize:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
          Conteudo
        </div>
      </main>
      <Footer />
    </>
  );
}