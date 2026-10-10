import { footer } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <p className="footer__main">{footer.main}</p>
      <p className="footer__to">{footer.to}</p>
      <p className="footer__ps">{footer.ps}</p>
      <p className="footer__fanmade">{footer.fanMade}</p>
    </footer>
  );
}
