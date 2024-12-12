'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Main() {
  const router = useRouter();

  const handleLogout = () => {
    // 로그아웃 로직 추가
    router.push('/signin'); // 로그인 페이지로 이동
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">메인 페이지</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="/feature1" className="text-sm text-gray-300 hover:underline">홈</a></li>
            <li><a href="/feature2" className="text-sm text-gray-300 hover:underline">메일</a></li>
            <li><a href="/feature3" className="text-sm text-gray-300 hover:underline">카페</a></li>
          </ul>
          <button onClick={handleLogout} className="text-sm text-gray-300 hover:underline">
            로그아웃
          </button>
        </nav>
      </header>
      <main className="flex-grow p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">환영합니다!</h2>
        <p>여기에 간단한 내용이 들어갑니다.</p>
        <p>사이트의 주요 기능이나 정보를 여기에 추가하세요.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 나의 웹사이트. 모든 권리 보유.</p>
      </footer>
    </div>
  );
} 