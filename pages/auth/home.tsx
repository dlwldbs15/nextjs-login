import {NextPage, InferGetServerSidePropsType } from 'next'
import {signOut, getSession} from 'next-auth/react';
import Head from 'next/head'
import LoginButton from '../../components/LoginButton'
import Content from '../../components/ContentDiv'

function HomePage({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(session)
    const logout = () => {
      signOut();
    }
    return (
      <div className="container">
        <Head>
          <title>Home</title>
          <meta name="description" content="Generated by jy" />
        </Head>
        {session && (
            <Content>
            <LoginButton id="" text="로그아웃" clickEventHandler={(e) => logout()}/>
            <></>
            </Content>
        )}
      </div>
    );
  }
    
export default HomePage;

export async function getServerSideProps(context : any) {
  const { req } = context;
  console.log('query : ', req.query);
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: { destination: "/auth/login" },
    };
  }

  return {
    props: {
      session: session
    },
  };
}
  