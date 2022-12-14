import {NextPage} from 'next'
import {signIn, useSession, getSession, getProviders, getCsrfToken} from 'next-auth/react';
import Head from 'next/head'
import LoginButton from '../../components/LoginButton'
import Content from '../../components/ContentDiv'

const SocialLoginPage : NextPage = ()  => {
  const { data: session } = useSession();

  const login = async (provider : string) => {
    const res = await signIn(provider);
    //console.log(res);
  }
  return (
    <div className="container">
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by jy" />
      </Head>
      {!session && (
        <Content>
          <LoginButton id="naver" text="네이버로 로그인" clickEventHandler={(e) => login('naver')}/>
          <LoginButton id="kakao" text="카카오로 로그인" clickEventHandler={(e) => login('kakao')}/>
          <LoginButton id="google" text="구글로 로그인" clickEventHandler={(e) => login('naver')}/>
        </Content>
      )}
    </div>
  );
}

export default SocialLoginPage;

export async function getServerSideProps(context : any) {
    const { req } = context;
    const session = await getSession({ req });
     if (session) {
      return {
        redirect: { destination: "/auth/home" },
      };
    }
  
    return {
      props: {
        providers: await getProviders(),
        csrfToken: await getCsrfToken(context),
      },
    };
  }
