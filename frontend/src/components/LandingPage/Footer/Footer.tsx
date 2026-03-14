import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              ScoreBook
            </div>
            <p className={styles.description}>
              Professional cricket scoring and analytics platform.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="#" aria-label="GitHub">
                <Github />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div className={styles.linkColumn}>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className={styles.linkColumn}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 ScoreBook. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
