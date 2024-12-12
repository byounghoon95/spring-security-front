'use client';


import React from 'react';
import { useRouter } from 'next/navigation';

export default function Join() {
  const router = useRouter();

  const handleJoin = () => {
    // 회원가입 로직 추가
    router.push('/main');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="아이디"
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="비밀번호"
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button
          onClick={handleJoin}
          className="bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700"
        >
          <span className='font-bold'>회원가입</span>
        </button>
      </div>
    </div>
  );
} 