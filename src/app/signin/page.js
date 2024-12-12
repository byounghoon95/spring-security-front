'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // 로그인 로직 추가
    router.push('/main'); // 메인 페이지로 이동
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          className="border border-gray-300 p-2 mb-4 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="border border-gray-300 p-2 mb-4 w-full rounded-lg"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700"
        >
          <span className='font-bold'>로그인</span>
        </button>
        <div className="flex justify-center mt-6 space-x-4">
          <button className="bg-white-600 text-white text-sm p-2 rounded-lg shadow-lg flex items-center justify-center w-12 h-12">
            <img src="https://phinf.pstatic.net/contact/78/2015/7/15/naveridlogin_1436952514384.png" className="w-6 h-6"/>
          </button>
          <button className="bg-yellow-300 text-white text-sm p-2 rounded-lg shadow-lg flex items-center justify-center w-12 h-12">
            <svg className='w-6 h-6' width="18px" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 18 17"><g transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)" stroke="none"><path fill="#212529" d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"></path></g></svg>
          </button>
          <button className="bg-white-600 text-white text-sm p-2 rounded-lg shadow-lg flex items-center justify-center w-12 h-12">
            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.785 9.169c0-.738-.06-1.276-.189-1.834h-8.42v3.328h4.942c-.1.828-.638 2.073-1.834 2.91l-.016.112 2.662 2.063.185.018c1.694-1.565 2.67-3.867 2.67-6.597z"></path><path fill="#34A853" d="M9.175 17.938c2.422 0 4.455-.797 5.94-2.172l-2.83-2.193c-.758.528-1.774.897-3.11.897-2.372 0-4.385-1.564-5.102-3.727l-.105.01-2.769 2.142-.036.1c1.475 2.93 4.504 4.943 8.012 4.943z"></path><path fill="#FBBC05" d="M4.073 10.743c-.19-.558-.3-1.156-.3-1.774 0-.618.11-1.216.29-1.774l-.005-.119L1.254 4.9l-.091.044C.555 6.159.206 7.524.206 8.969c0 1.445.349 2.81.957 4.026l2.91-2.252z"></path><path fill="#EB4335" d="M9.175 3.468c1.684 0 2.82.728 3.468 1.335l2.531-2.471C13.62.887 11.598 0 9.175 0 5.667 0 2.638 2.013 1.163 4.943l2.9 2.252c.727-2.162 2.74-3.727 5.112-3.727z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
} 