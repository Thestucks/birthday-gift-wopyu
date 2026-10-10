import { useState } from 'react';
import { gallery } from '../data/content.js';
import { asset } from '../lib/asset.js';
import { useQuest } from '../context/QuestContext.jsx';
import useInView from '../hooks/useInView.js';
import PhotoCard from './PhotoCard.jsx';

// Susun kartu dari daftar foto nyata di folder aset + metadata kategorinya.
const items = gallery.items.map((it) => {
  const cat = gallery.categories[it.category] || {};
  return {
    src: asset(gallery.folder + it.src),
    label: cat.label,
    caption: cat.caption,
    accent: cat.accent || '#B9D5B0',
    alt: it.alt,
    placeholder: 'Foto belum tersedia — periksa nama file di folder assets/photos/.',
  };
});

export default function PhotoGallery() {
  const { markQuest } = useQuest();
  const ref = useInView(() => markQuest('memories'));
  const [modal, setModal] = useState(null);

  return (
    <section className="gallery section" id="gallery" ref={ref}>
      <div className="section__head">
        <h2 className="section__title">{gallery.title}</h2>
        <p className="section__hint">Scrapbook kenangan · ketuk foto untuk memperbesar</p>
      </div>

      <div className="gallery__grid">
        {items.map((item, i) => (
          <PhotoCard
            key={`${item.src}-${i}`}
            item={item}
            src={item.src}
            accent={item.accent}
            onOpen={setModal}
          />
        ))}
      </div>

      {modal && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={modal.item.label}
          onClick={() => setModal(null)}>
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal__close" onClick={() => setModal(null)} aria-label="Tutup foto">
              ✕
            </button>
            <img className="modal__img" src={modal.src} alt={modal.item.alt} />
            <div className="modal__caption">
              <span className="polaroid__label">{modal.item.label}</span>
              <span className="polaroid__text">{modal.item.caption}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
