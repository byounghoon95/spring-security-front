'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../api/interceptor';

export default function Main() {
  const router = useRouter();

  const handleLogout = () => {
    axiosInstance.post('/api/logout', {}, { withCredentials: true })
    .then(() => {
      router.push('/signin');
    })
    .catch(error => {
      console.error("로그아웃 실패:", error);
    });
  };

  const getMain = () => {
    axiosInstance.get('/api/main')
    .then(response => console.log(response.data));
  }

  const getAdmin = () => {
    axiosInstance.get('/api/admin')
    .then(response => console.log(response.data))
    .catch(error => {
      if(error.response.data.code === '1004') {
        alert("권한이 없습니다");
      }
    })
  }

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
        <div className="flex space-x-3">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={getMain}>Main
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getAdmin}>Admin</button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 나의 웹사이트. 모든 권리 보유.</p>
      </footer>
    </div>
  );
} 