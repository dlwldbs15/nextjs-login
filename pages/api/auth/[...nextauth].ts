import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId : process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    NaverProvider({
        clientId : process.env.NAVER_ID as string,
        clientSecret: process.env.NAVER_SECRET as string,
    }),
    KakaoProvider({
        clientId : process.env.KAKAO_ID as string,
        clientSecret: process.env.KAKAO_SECRET as string,
    })
  ],
  session: {
    strategy: 'jwt',
    //maxAge: 30 * 24 * 60 * 60, // 30 days
    //updateAge: 24 * 60 * 60, // 24 hours
  },
  secret : process.env.SECRET as string,
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token;
        console.log('token :', token)
      }
      if (profile) {
        console.log('profile : ', profile);
      }
      if (account) {
        console.log('account : ', account);
      }
      //console.log('user : ', user);
      //console.log('account : ', account);
      //
      //console.log('isNewUser : ', isNewUser);
      return token;
    },
    async session({ session, user, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  //secret: process.env.SECRET as string,
});