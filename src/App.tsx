import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
// import PromotionModal from './components/PromotionModal';

function App() {
  return (
    <div className={styles.app}>
      <a href="#content" className={styles.skipTo}>
        본문 바로가기
      </a>
      <Navigation />
      <header className={styles.header}>
        <title>a11y airplane 항공권 예매 및 여행 정보</title>
        <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
        <p className="body-text">
          A11Y AIRLINE은 고객 ßee여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </header>
      <main className={styles.main} id="content" tabIndex={0}>
        <section className={styles.flightBooking}>
          <FlightBooking />
        </section>
        <section className={styles.travelSection}>
          <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
          <TravelSection />
        </section>
      </main>
      <footer className={styles.footer}>
        <p className="body-text">&copy; A11Y AIRLINE</p>
      </footer>
      {/* 추가 CHALLENGE: 모달 포커스 트랩 */}
      {/* <PromotionModal /> */}
    </div>
  );
}

export default App;
