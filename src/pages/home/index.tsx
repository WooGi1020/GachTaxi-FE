import MatchingSheet from '@/components/home/MatchingSheet';
import Navbar from '@/components/home/Navbar';
import { useState, Suspense, lazy } from 'react';

const KakaoMap = lazy(() => import('@/components/home/KakaoMap'));

const HomePage = () => {
  const [modalContent, setModalContent] = useState({
    home: true,
    match: false,
    friend: false,
  });

  return (
    <section className="w-full flex-1 overflow-hidden relative bg-neutral">
      <Suspense fallback={<div className="bg-white h-[85vh]">로딩중...</div>}>
        <KakaoMap />
      </Suspense>
      <MatchingSheet modalContent={modalContent} />
      <Navbar modalContent={modalContent} setModalContent={setModalContent} />
    </section>
  );
};

export default HomePage;
