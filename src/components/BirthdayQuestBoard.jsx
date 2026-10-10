import { quests, questReward } from '../data/content.js';
import { useQuest } from '../context/QuestContext.jsx';

// Papan quest sederhana. Menandai progres eksplorasi; isi tetap bisa dibaca
// tanpa harus menyelesaikan quest. Tidak ada login / leaderboard / penyimpanan.
export default function BirthdayQuestBoard() {
  const { completed } = useQuest();
  const total = quests.length;
  const done = quests.filter((q) => completed.has(q.id)).length;
  const allDone = done === total;

  return (
    <section className="quests section" id="quests">
      <div className="section__head">
        <h2 className="section__title">Today’s Birthday Quest 📋</h2>
        <p className="section__hint">
          {done} dari {total} kejutan dibuka · semua isi tetap bisa dibaca tanpa
          menyelesaikan quest.
        </p>
      </div>

      <div className="quests__progress" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={total}>
        <div className="quests__progress-bar" style={{ width: `${(done / total) * 100}%` }} />
      </div>

      <ol className="quests__list">
        {quests.map((q) => {
          const isDone = completed.has(q.id);
          return (
            <li key={q.id} className={`quest ${isDone ? 'is-done' : ''}`}>
              <span className="quest__check" aria-hidden="true">{isDone ? '✔' : ''}</span>
              <div className="quest__body">
                <p className="quest__title">{q.title}</p>
                <p className="quest__desc">{q.desc}</p>
              </div>
              <span className="quest__status">{isDone ? 'Selesai' : 'Menunggu'}</span>
            </li>
          );
        })}
      </ol>

      {allDone && (
        <p className="quests__reward" role="status">
          🏅 {questReward}
        </p>
      )}
    </section>
  );
}
