import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

interface ResponseType {
  ok: boolean;
  error?: any;
}

const Kakao: NextPage = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;
  console.log(authCode);
  const loginHandler = useCallback(
    async (code: string | string[]) => {
      // 백엔드에 전송
      const response: ResponseType = await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;',
        },
        body: `grant_type=authorization_code&client_id=${process.env.KAKAO_ID}&code=${code}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`,
      }).then((res) => res.json());
      
      if (response.ok) { // 성공하면 홈으로 리다이렉트
        router.push('/auth/home');
      } else { // 실패하면 에러 페이지로 리다이렉트
        router.push('/notifications/authentication-failed');
      }
    },
    [router]
  );

  useEffect(() => {
    if (authCode) {
        console.log(authCode);
        //loginHandler(authCode);
      
      // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
    } else if (kakaoServerError) { 
      router.push('/notifications/authentication-failed');
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  return (
          <h2>로그인 중입니다..</h2>
  );
};

export default Kakao;