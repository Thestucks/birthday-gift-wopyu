import { useState } from 'react';
import { QuestProvider, useQuest } from './context/QuestContext.jsx';

import BirthdayTownBackground from './components/BirthdayTownBackground.jsx';
import OpeningScreen from './components/OpeningScreen.jsx';
import HeroBirthday from './components/HeroBirthday.jsx';
import SweetIntro from './components/SweetIntro.jsx';
import BirthdayQuestBoard from './components/BirthdayQuestBoard.jsx';
import FunnyNotes from './components/FunnyNotes.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import LetterForPutri from './components/LetterForPutri.jsx';
import BirthdayWishesGarden from './components/BirthdayWishesGarden.jsx';
import FinalSurprise from './components/FinalSurprise.jsx';
import Footer from './components/Footer.jsx';
import MusicToggle from './components/MusicToggle.jsx';
import MotionToggle from './components/MotionToggle.jsx';

function TownContent() {
  // Urutan halaman sesuai brainstorm: hero -> intro -> quest -> notes -> gallery
  // -> letter -> wishes -> final -> footer.
  return (
    <main className="town">
      <HeroBirthday />
      <SweetIntro />
      <BirthdayQuestBoard />
      <FunnyNotes />
      <PhotoGallery />
      <LetterForPutri />
      <BirthdayWishesGarden />
      <FinalSurprise />
      <Footer />
    </main>
  );
}

function Shell() {
  const { markQuest, resetQuests, playMusic } = useQuest();
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    markQuest('town');
    setEntered(true);
    // Gesture klik pengguna mengizinkan pemutaran musik (tanpa autoplay saat load).
    playMusic();
    window.scrollTo({ top: 0 });
  };

  // "Kembali ke awal" bisa dipakai mengulang dari gerbang lewat tombol footer opsional
  const replay = () => {
    setEntered(false);
    resetQuests();
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <BirthdayTownBackground />
      {!entered ? <OpeningScreen onEnter={handleEnter} /> : <TownContent />}

      <div className="controls">
        {!entered ? (
          <MotionToggle />
        ) : (
          <>
            <MusicToggle />
            <MotionToggle />
            <button type="button" className="replay-btn" onClick={replay} title="Ulangi dari gerbang">
              ⟲
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <QuestProvider>
      <Shell />
    </QuestProvider>
  );
}
